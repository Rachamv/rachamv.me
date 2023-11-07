<html lang="en">
@include('flayout._head')
<body class="{!!  !empty($className) ? $className : '' !!}">
    <!-- Live Style Switcher Starts - demo only -->
    @include('flayout._themeswitcher')
     <!-- Live Style Switcher Ends - demo only -->
    <!-- Header Starts -->
    @include('flayout._header')
    <!-- Header Ends -->
    @yield('content')

    @include('flayout._footer')
</body>
</html>

