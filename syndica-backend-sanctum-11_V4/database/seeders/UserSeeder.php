<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     * 
     * USE THIS CODE TO SEED DATABASE SEEDER
     * php artisan db:seed
     * 
     * USE THIS CODE TO SEED SPECIFIC MODEL
     * php artisan db:seed --class=UserSeeder
     * 
     * @return void
     */
    public function run()
    {
        User::create([
            'employee_id' => 'EMP001',
            'first_name' => 'John',
            'last_name' => 'Doe',
            'email' => 'john.doe@test.com',
            'contact_number' => '1234567890',
            'role' => 'Admin',
            'account_status' => 'Active',
            'division' => 'Plaridel',
            'designation' => 'Manager',
            'password' => Hash::make('password123'),  
        ]);

        User::create([
            'employee_id' => 'EMP002',
            'first_name' => 'Jane',
            'last_name' => 'Smith',
            'email' => 'jane.smith@test.com',
            'contact_number' => '0987654321',
            'role' => 'Issuer',
            'account_status' => 'Active',
            'division' => 'Calumpit',
            'designation' => 'Supervisor',
            'password' => Hash::make('password123'),
        ]);

        User::create([
            'employee_id' => 'EMP003',
            'first_name' => 'bey',
            'last_name' => 'cabrera',
            'email' => 'bey@gmail.com',
            'contact_number' => '0987654321',
            'role' => 'Issuer',
            'account_status' => 'Active',
            'division' => 'Calumpit',
            'designation' => 'Bading',
            'password' => Hash::make('password123'),
        ]);

        User::create([
            'employee_id' => 'EMP004',
            'first_name' => 'akira',
            'last_name' => 'ibarreta',
            'email' => 'aki@gmail.com',
            'contact_number' => '0987654321',
            'role' => 'Issuer',
            'account_status' => 'Active',
            'division' => 'Pulilan',
            'designation' => 'Chief',
            'password' => Hash::make('password123'),
        ]);

        // Add more users as needed
    }
}
