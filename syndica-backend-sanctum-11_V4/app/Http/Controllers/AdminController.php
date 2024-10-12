<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    // Method to display the user list
    public function index(Request $request)
    {
        // Check if the requesting user is an Admin
        if ($request->user()->role !== 'Admin') {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        // Fetch all users from the database whose role is not 'Admin'
        $users = User::where('role', '<>', 'Admin')->get();

        return response()->json($users);
    }



}
