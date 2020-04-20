<?php

use Illuminate\Database\Seeder;
use App\Task;

class TasksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create();

        //create 50 tasks records
        for($i = 0; $i < 50; $i ++){
            Task::create([
                'title' => $faker->title,
                'responsible' => $faker->paragraph,
                'description' => $faker->description,
                'priority' => $faker->priority
            ]);
        }
    }
}
