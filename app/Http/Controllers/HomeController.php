<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        $data['meta_title'] = 'Home';
        $data['className'] = 'home';
        return view('index', $data);
    }

    public function about()
    {
        $data['meta_title'] = 'About';
        $data['className'] = 'about';
        return view('about', $data);
    }

    public function blog()
    {
        $data['meta_title'] = 'Blog';
        $data['className'] = 'blog';
        return view('blog', $data);
    }

    public function blogPost()
    {
        $data['meta_title'] = 'Blog Post';
        $data['className'] = 'blog-post';
        return view('blog-post', $data);
    }

    public function contact()
    {
        $data['meta_title'] = 'Contact';
        $data['className'] = 'contact';
        return view('contact', $data);
    }

    public function portfolio()
    {
        $data['meta_title'] = 'Portfolio';
        $data['className'] = 'portfolio';
        return view('portfolio', $data);
    }
}
