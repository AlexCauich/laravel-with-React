<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Task;
class TasksController extends Controller
{
    public function index(){
        return Task::all();
    }

    public function show(Task $task){
        return $task;
    }

    public function store(Request $request){
        $this->validate($request, [
            'title' => 'required|unique:products|max:255',
            'responsible' => 'required',
            'description' => 'required',
        ]);
            $product = Product::create($request->all());
     
            return response()->json($product, 201);
    }

    public function update(Request $request, Task $task) {
        $task->update($request->all());
        return response()->json($task, 200);
    }

    public function delete (Task $task) {
        $task->delete();
        return response()->json(null, 204);
    }
}
