<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Phone;

class PhoneController extends Controller
{
    public function index()
    {
        $contact_id = request()->input('contact_id');

        if ($contact_id > 0) {
            return Phone::query()
                        ->where('contact_id', '=', $contact_id)
                        ->get();
        }

        return Phone::all();
    }

    public function show(Phone $phone)
    {
        return $phone;
    }

    public function store(Request $request)
    {
        $phone = Phone::create($request->all());

        return response()->json($phone, 201);
    }

    public function update(Request $request, Phone $phone)
    {
        $phone->update($request->all());

        return response()->json($phone, 200);
    }

    public function delete(Phone $phone)
    {
        $phone->delete();

        return response()->json(null, 204);
    }
}
