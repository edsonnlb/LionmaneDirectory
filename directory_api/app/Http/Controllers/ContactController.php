<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Contact;

class ContactController extends Controller
{
    public function index()
    {
        $search = request()->input('search');

        $page = request()->input('page');
        if ($page == null || $page < 1) {
            $page = 1;
        }
        $pageSize = request()->input('pageSize');
        if ($pageSize == null || $pageSize <= 0) {
            $pageSize = 10;
        }

        $sortBy = request()->input('sortBy');
        if ($sortBy == null || strlen($sortBy) == 0) {
            $sortBy = 'first_name';
        }
        $sortDir = request()->input('sortDir');
        if ($sortDir == null || strlen($sortDir) == 0) {
            $sortDir = 'ASC';
        }

        return Contact::query()
                    ->where('first_name', 'LIKE', "%$search%")
                    ->orWhere('last_name', 'LIKE', "%$search%")
                    ->orderBy($sortBy, $sortDir)
                    ->paginate($pageSize, ['*'], 'page', $page);
    }

    public function show(Contact $contact)
    {
        return $contact;
    }

    public function store(Request $request)
    {
        $requestData = $request->all();
        $requestData['created_at'] = date("Y-m-d H:i:s");
        $requestData['updated_at'] = date("Y-m-d H:i:s");
        $contact = Contact::create($requestData);

        return response()->json($contact, 201);
    }

    public function update(Request $request, Contact $contact)
    {
        $requestData = $request->all();
        $requestData['updated_at'] = date("Y-m-d H:i:s");
        unset($requestData['created_at']);
        $contact->update($request->all());

        return response()->json($contact, 200);
    }

    public function delete(Contact $contact)
    {
        $contact->delete();

        return response()->json(null, 204);
    }

    public function getAvatar(Contact $contact) {
        if ($contact != null && $contact['contact_id'] > 0) {
            if (file_exists(public_path() . '/avatars/' . $contact['contact_id'] . '.jpg')) {
                return response()->json(url('/') . '/avatars/' . $contact['contact_id'] . '.jpg', 200);
            }

            return response()->json(url('/') . '/avatars/default.png', 200);
        }
    }
}
