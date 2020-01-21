<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Phone extends Model
{
     /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['contact_id', 'phone_number', 'category'];

    public $timestamps = false;

    /**
     * Get the contact that owns the phone.
     */
    public function contact()
    {
        return $this->belongsTo('App\Contact');
    }
}
