<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // default user migration
        // Schema::create('users', function (Blueprint $table) {
        //     $table->id();
        //     $table->string('name');
        //     $table->string('email')->unique();
        //     $table->timestamp('email_verified_at')->nullable();
        //     $table->string('password');
        //     $table->rememberToken();
        //     $table->timestamps();
        // });

        Schema::create('users', function (Blueprint $table) {
            $table->id();  // Primary key
            $table->string('employee_id')->unique();  // Employee ID (unique)
            $table->string('first_name');  // First Name
            $table->string('last_name');   // Last Name
            $table->string('email')->unique();  // Email (unique)
            $table->string('contact_number')->nullable();  // Contact Number
            $table->enum('role', ['Admin', 'Issuer', 'Logistics', 'Finance', 'Accounting']);  // Role (enum)
            $table->enum('account_status', ['Active', 'Inactive'])->default('Active');  // Account Status
            $table->enum('division', ['Plaridel', 'Calumpit', 'Pulilan']);  // Division
            $table->string('designation')->nullable();  // Designation
            $table->string('password');  // Password
            $table->rememberToken();  // Remember token for authentication
            $table->timestamps();  // created_at and updated_at
        });

        Schema::create('password_reset_tokens', function (Blueprint $table) {
            $table->string('email')->primary();
            $table->string('token');
            $table->timestamp('created_at')->nullable();
        });

        Schema::create('sessions', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->foreignId('user_id')->nullable()->index();
            $table->string('ip_address', 45)->nullable();
            $table->text('user_agent')->nullable();
            $table->longText('payload');
            $table->integer('last_activity')->index();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
        Schema::dropIfExists('password_reset_tokens');
        Schema::dropIfExists('sessions');
    }
};
