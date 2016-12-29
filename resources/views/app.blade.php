<!DOCTYPE html>
<html lang="en" ng-app="eQuickShopApp">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>eQuickSHOP | Home Page</title>
  <!-- Tell the browser to be responsive to screen width -->
  <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
  <!-- Bootstrap 3.3.6 -->
  <link href="{{ asset('/css/bootstrap.min.css') }}" rel="stylesheet">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="{{ asset('/css/font-awesome/4.7.0/css/font-awesome.min.css') }} ">
  <!-- Ionicons -->
  <link rel="stylesheet" href="{{ asset('/css/ionicons/2.0.1/css/ionicons.min.css') }} ">
  <!-- Theme style -->
  <link rel="stylesheet" href="{{ asset('/css/AdminLTE.min.css') }}">

  <!-- AdminLTE Skins. Choose a skin from the css/skins
       folder instead of downloading all of them to reduce the load. -->
   <link rel="stylesheet" href="{{ asset('/css/skins/skin-blue.min.css') }} ">

    <link rel="stylesheet" href="{{ asset('/css/mystyle.css') }}">

  <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
  <!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
  <![endif]-->
</head>
<body class="hold-transition skin-blue sidebar-mini" ng-controller="mainController">
<!-- Site wrapper -->
<div>

<!-- Header -->
<div ng-include src="'views/includes/header.html'"></div>

  <!-- =============================================== -->

<!-- Navigation -->
<!--<div ng-include src="'views/includes/navigation.html'"></div>-->

  <!-- =============================================== -->

  <!-- Content Wrapper. Contains page content -->
  
    <ng-view></ng-view>

  <!-- /.content-wrapper -->

  <!-- Navigation -->
  <div ng-include src="'views/includes/footer.html'"></div>
  
</div>
<!-- ./wrapper -->



<!-- jQuery 2.2.3 -->
<script src="{{ asset('/js/jquery-2.2.3.min.js') }}"></script>
<!-- Bootstrap 3.3.6 -->
<script src="{{ asset('/js/bootstrap.min.js') }}"></script>
<!-- SlimScroll -->
<script src="{{ asset('/js/jquery.slimscroll.min.js') }}"></script>
<!-- FastClick -->
<script src="{{ asset('/js/fastclick.min.js') }}"></script>
<!-- AdminLTE App -->
<script src="{{ asset('/js/app.min.js') }}"></script>
<!-- AdminLTE for demo purposes -->
<script src="{{ asset('/js/demo.js') }}"></script>

<!-- Angular JS -->
<script src="{{ asset('/js/angular.min.js') }}"></script> 
<script src="{{ asset('/js/angular-route.min.js') }}"></script> 
<!-- MY App -->
<script src="{{ asset('/app/app.js') }}"></script>
</body>
</html>
