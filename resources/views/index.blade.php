@extends('flayout.app')

@section('content')
<!-- Main Content Starts -->
<section class="container-fluid main-container container-home p-0 revealator-slideup revealator-once revealator-delay1">
    <div class="color-block d-none d-lg-block"></div>
    <div class="row home-details-container align-items-center">
        <div class="col-lg-4 bg position-fixed d-none d-lg-block"></div>
        <div class="col-12 col-lg-8 offset-lg-4 home-details text-left text-sm-center text-lg-left">
            <div>

                <img src="{{ url('public/images/2.jpg')}}" class="img-fluid main-img-mobile d-none d-sm-block d-lg-none" alt="my picture">
                <h1 class="text-uppercase poppins-font">Adewunmi Oladele</h1>
                <h2 class="text-uppercase poppins-font">Software Engineer</h2>
                <p class="open-sans-font">I'm a full-stack developer based in Nigeria, with a strong specialization in backend systems. My primary focus is on creating clean and user-friendly experiences. I'm passionate about building outstanding software that enhances the lives of those around me.</p>
                <a class="button" href="{{ url('about') }}">
                    <span class="button-text">more about me</span>
                    <span class="button-icon fa fa-arrow-right"></span>
                </a>
            </div>
        </div>
    </div>
</section>
<!-- Main Content Ends -->
@endsection