<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    protected $primaryKey = 'contact_id';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['first_name', 'last_name', 'nickname', 'birthday', 'gender', 'created_at', 'updated_at'];

    /**
     * Get the phones for the contact.
     */
    public function phones()
    {
        return $this->hasMany('App\Phone');
    }
}
