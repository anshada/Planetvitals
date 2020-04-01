<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="description"
        content="Curated, Uptodate Data of CORONA/COVID'19 including analytics and scientific representations. Day by day there is a lot going on around the globe in multiple domains which requires attention and vital analysis. We at Innovation Incubator believe in representing the right data, in best capturable and understandable representations, while ensuring they are validated and usable to researchers, public and companies alike. Lets change the world with these insights and analysis.">
    <meta name="keywords"
        content="planetvitals,innovation incubator,corona death count,coronavirus update, covid-19, corona virus india, corona virus symptoms,coronavirus latest news,coronavirus china,corona virus news,corona optus,corona effect,coronavirus death toll,coronavirus oregon,coronavirus italy,corona california,corona spread,corona latest update,corona virus death rate,coronavirus cure,corona virus mexico, corona virus kerala, latest corona reports,corona virus brazil,corona virus australia,corona virus vaccine,corona virus air born,corona FAQ,corona help,corona support,corona world ">
    <meta name="author" content="innovation incubator">
    <meta name="viewport" content="width=100%, initial-scale=1.0">
    <meta property="og:title" content="Corona Statistics" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="http://planetvitals.iinerds.com/corona.html" />
    <meta property="og:image" content="https://planetvitals.iinerds.com/assets/img/coronavirus_640.jpg" />
    <meta property="og:description"
        content="Live statistics tracking the number of confirmed cases, recovered patients, and death toll by country due to the novel coronavirus from Wuhan, China." />

    <title>Corona Dashboard</title>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <!--mapbox gl-->
    <script src="https://api.mapbox.com/mapbox-gl-js/v1.9.0/mapbox-gl.js"></script>
    <link href='https://api.mapbox.com/mapbox-gl-js/v1.9.0/mapbox-gl.css' rel='stylesheet' />
    <!--google analytics-->
    <!-- Template Main CSS File -->
    <link href="assets/css/style.css" rel="stylesheet">

    <!-- Vendor CSS Files -->
    <link href="assets/vendor/icofont/icofont.min.css" rel="stylesheet">
    <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
    <link href="assets/vendor/animate.css/animate.min.css" rel="stylesheet">
    <link href="assets/vendor/venobox/venobox.css" rel="stylesheet">
    <link href="assets/vendor/aos/aos.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
    <!--table sort Js files-->
    <script src="assets/vendor/tablesort/tablesort.min.js"></script>
    <script src="assets/vendor/tablesort/tablesort.number.min.js"></script>
    <script src="assets/vendor/tablesort/tablesort.date.min.js"></script>
    <!--table sort js ends-->
    <!--youtube script-->
    <!--youtube script ends-->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-158798381-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'UA-158798381-1');
    </script>
</head>

<body>
    <header id="header">
        <div class="container">

            <div class="logo float-left">

                <h1 class="text-light"> <a href="index.html"><span>PLANET VITALS</span> </a> <a
                        href="https://innovationincubator.com/"><img src="assets/img/iia-black.png"
                            style="float:right;"></a>
                </h1>
            </div>

            <nav class="nav-menu float-right d-none d-lg-block">
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li class="drop-down active"><a href="">Health</a>
                        <ul>
                            <li><a href="health.html">Info</a></li>
                            <li class="active"><a href="corona.html">Corona</a></li>
                        </ul>
                    </li>
                    <li><a href="agriculture.html">Agriculture</a></li>
                    <!-- <li><a href="#">Politics</a></li> -->
                    <li><a href="education.html">Education</a></li>
                </ul>
            </nav>
            <!-- .nav-menu -->

        </div>
    </header><br><br><br>

    <div class="container">

        <h1>India / Kerala</h1><br>

        <h5>Last updated on : 01/04/2020</h5>

        <!-- <nav class="sticky-top" style="top:60px" id="second-nav">
            <div class="nav nav-tabs" style="background: white;" id="nav-tab" role="tablist">
                <a class="nav-item nav-link active" id="corona-stats-tab" data-toggle="tab" href="#corona-stats"
                    role="tab" aria-controls="corona-stats" aria-selected="true">Stats</a>
                <a class="nav-item nav-link" id="corona-Info-tab" data-toggle="tab" href="#corona-Info" role="tab"
                    aria-controls="corona-FAQ" aria-selected="false">Info</a>
                <a class="nav-item nav-link" id="corona-FAQ-tab" data-toggle="tab" href="#corona-FAQ" role="tab"
                    aria-controls="corona-FAQ" aria-selected="false">F.A.Q</a>
                <a class="nav-item nav-link" id="corona-news-tab" data-toggle="tab" href="#corona-news" role="tab"
                    aria-controls="corona-news" aria-selected="false">News</a>
                <a class="nav-item nav-link" id="corona-news-tab" data-toggle="tab" href="#corona-video" role="tab"
                    aria-controls="corona-video" aria-selected="false">Videos</a>
                <a class="nav-item nav-link" id="corona-help-tab" data-toggle="tab" href="#corona-help" role="tab"
                    aria-controls="corona-help" aria-selected="false">Help</a>

            </div>
        </nav> -->

        <!-- TABs BEGIN
        <div class="tab-content" id="nav-tabContent">
            <!--STATS TAB BEGIN-->

        <!-- count row starting -->
        <div class="row counts ">
            <div class="card col-md-3 pt-3 col-sm-12 text-center" style="border: none;">
                <h4>Confirmed Cases</h4>
                <p id="totalConfirmed" class="pt-3" style="color: #aaa;font-weight: 700;font-size: 54px;">
                </p>
            </div>
            <div class="card col-md-3 pt-3 col-sm-12 text-center" style="border: none;">
                <h4>Confirmed Death</h4>
                <p id="totalDeaths" class="pt-3" style="color:red;font-weight: 700;font-size: 54px;"></p>
            </div>
            <div class="card col-md-3 pt-3 col-sm-12 text-center" style="border: none;">
                <h4>Recovered</h4>
                <p id="totalRecovered" class="pt-3" style="color:green;font-weight: 700;font-size: 54px;">
                </p>
            </div>
            <div class="card col-md-3 pt-3 col-sm-12 text-center" style="border: none;">
                <h4>Active Cases</h4>
                <p id="totalSick" class="pt-3" style="color:orange;font-weight: 700;font-size: 54px;"></p>
            </div>
        </div> 
        <!-- count row ending -->


        <div class="tab-pane fade show active" id="corona-stats" role="tabpanel" aria-labelledby="corona-stats-tab">
            <div class="container-fluid">
                <div class="row pt-5 px-5">
                    <h3 style="color: slategrey;">
                        Countries with highest no of confirmed cases
                    </h3>
                </div>
                <div class="row">
                    <div class="chart-area h-80" style="height:300px;width: 100%;">
                        <canvas id="myAreaChart" class="darkmode-ignore"></canvas>
                    </div>
                </div>
                <div class="chart-subtitle row px-5">
                    <p style="color: lightgrey;">*The above chart is being updated based on hourly curated data from
                        multiple sources.
                    </p>
                </div>
                <div class="row pt-2 px-5">
                    <h3 style="color:grey;">
                        Corona Virus Cases:
                    </h3>
                </div>

                <!--table Headline-->
                <div class="row pt-5 px-5">
                    <h3 style="color:grey;">
                        Corona Virus Confirmed Cases & Deaths by Country/Territory and Conveyances
                    </h3>
                    <p>Corona virus is affecting <strong><span id="count-country"
                                style="color:darkred;"></span></strong> around the world and the Diamond Princess
                        cruise ship harbored in Yokohama, Japan </p>
                </div>

                <nav id="fourth-nav">
                    <div class="nav nav-pills pl-3 py-3 d-flex justify-content-center" id="nav-tab" role="tablist">
                        <a class="nav-item nav-link active" id="corona-tableview-tab" data-toggle="tab"
                            href="#corona-tableview" role="tab" aria-controls="corona-tableview"
                            aria-selected="true">Table view</a>
                        <a class="nav-item nav-link" id="corona-mapview-tab" data-toggle="tab" href="#corona-mapview"
                            role="tab" aria-controls="corona-mapview" aria-selected="false">Graphical/Map view</a>
                    </div>
                </nav>


                <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="corona-tableview" role="tabpane01"
                        aria-labelledby="corona-tableview-tab">

                        <!-- STATS table start -->
                        <div class="row d-flex justify-content-center py-4" id="country">
                            <div class="col-sm-12 col-md-12 ">
                                <nav id="third-nav">
                                    <div class="nav nav-pills pl-3 py-3" id="nav-tab" role="tablist">
                                        <a class="nav-item nav-link active" id="corona-todaytable-tab" data-toggle="tab"
                                            href="#corona-todaytable" role="tab" aria-controls="corona-todaytable"
                                            aria-selected="true">Today</a>
                                        <a class="nav-item nav-link" id="corona-ystrdytable-tab" data-toggle="tab"
                                            href="#corona-ystrdytable" role="tab" aria-controls="corona-ystrdytable"
                                            aria-selected="false">Yesterday</a>
                                    </div>


                                </nav>
                                <!--Table TABs  BEGIN-->
                                <div class="tab-content" id="nav-tabContent">
                                    <div class="tab-pane fade show active" id="corona-todaytable" role="tabpanel"
                                        aria-labelledby="corona-todaytable-tab">
                                        <div class="container">
                                            <h1>Daily Update Table</h1>
                                            <div class="row float-right mr-1 mb-1"><input id="myInput-1" type="text"
                                                    placeholder="Search by location">
                                            </div>
                                            <table
                                                class="table text-center table-striped table-bordered table-responsive-sm"
                                                id="country-table-1">

                                                <thead class="thead-dark">
                                                    <tr class="text-center">
                                                        <th style="color:whitesmoke"><i class="icofont-sort"></i>Country
                                                        </th>
                                                        <th style="color:whitesmoke"><i
                                                                class="icofont-sort"></i>Confirmed
                                                            Cases
                                                        </th>
                                                        <th style="color:whitesmoke"><i class="icofont-sort"></i>New
                                                            cases
                                                        </th>
                                                        <th style="color:whitesmoke;"><i class="icofont-sort"></i>Total
                                                            Deaths
                                                        </th>
                                                        <th style="color:whitesmoke"><i class="icofont-sort"></i>New
                                                            Deaths
                                                        </th>
                                                        <th style="color:whitesmoke"><i class="icofont-sort"></i>Serious
                                                            Cases
                                                        </th>
                                                        <th style="color:whitesmoke"><i class="icofont-sort"></i>Active
                                                            Cases
                                                        </th>
                                                        <th style="color:whitesmoke;"><i class="icofont-sort"></i>Total
                                                            Recovered
                                                        </th>
                                                        <th style="color:whitesmoke"><i class="icofont-sort"></i>Cases/M
                                                            Population
                                                        </th>
                                                        <th style="color:whitesmoke"><i
                                                                class="icofont-sort"></i>Deaths/M
                                                            Population
                                                        </th>
                                                        <th style="color:whitesmoke"><i class="icofont-sort"></i>First
                                                            Case
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody id="tb-content-1">
                                                </tbody>
                                            </table>

                                            <h1>Active Cases Table</h1>
                                            <div class="row float-right mr-1 mb-1"><input id="myInput-1" type="text"
                                                    placeholder="Search by location">
                                            </div>
                                            <table
                                                class="table text-center table-striped table-bordered table-responsive-sm"
                                                id="country-table-1">

                                                <thead class="thead-dark">
                                                    <tr class="text-center">
                                                        <th style="color:whitesmoke"><i class="icofont-sort"></i>Country
                                                        </th>
                                                        <th style="color:whitesmoke"><i
                                                                class="icofont-sort"></i>Confirmed
                                                            Cases
                                                        </th>
                                                        <th style="color:whitesmoke"><i class="icofont-sort"></i>New
                                                            cases
                                                        </th>
                                                        <th style="color:whitesmoke;"><i class="icofont-sort"></i>Total
                                                            Deaths
                                                        </th>
                                                        <th style="color:whitesmoke"><i class="icofont-sort"></i>New
                                                            Deaths
                                                        </th>
                                                        <th style="color:whitesmoke"><i class="icofont-sort"></i>Serious
                                                            Cases
                                                        </th>
                                                        <th style="color:whitesmoke"><i class="icofont-sort"></i>Active
                                                            Cases
                                                        </th>
                                                        <th style="color:whitesmoke;"><i class="icofont-sort"></i>Total
                                                            Recovered
                                                        </th>
                                                        <th style="color:whitesmoke"><i class="icofont-sort"></i>Cases/M
                                                            Population
                                                        </th>
                                                        <th style="color:whitesmoke"><i
                                                                class="icofont-sort"></i>Deaths/M
                                                            Population
                                                        </th>
                                                        <th style="color:whitesmoke"><i class="icofont-sort"></i>First
                                                            Case
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody id="tb-content-1">
                                                </tbody>
                                            </table>
                                        </div>

                                    </div>



                                    <div class="tab-pane fade" id="corona-ystrdytable" role="tabpanel"
                                        aria-labelledby="corona-ystrdytable-tab">
                                        <div class="container">
                                            <h1>Daily Update Table</h1>
                                            <div class="row float-right mr-1 mb-1"><input id="myInput-2" type="text"
                                                    placeholder="Search by location">
                                            </div>
                                            <table
                                                class="table text-center table-striped table-bordered table-responsive-sm"
                                                id="country-table-2">

                                                <thead class="thead-dark">
                                                    <tr class="text-center">
                                                        <th style="color:whitesmoke"><i class="icofont-sort"></i>COUNTRY
                                                        </th>
                                                        <th style="color:whitesmoke"><i
                                                                class="icofont-sort"></i>Confirmed
                                                            Cases
                                                        </th>
                                                        <th style="color:whitesmoke"><i class="icofont-sort"></i>New
                                                            cases
                                                        </th>
                                                        <th style="color:whitesmoke;"><i class="icofont-sort"></i>Total
                                                            Deaths</th>
                                                        <th style="color:whitesmoke"><i class="icofont-sort"></i>New
                                                            Deaths
                                                        </th>
                                                        <th style="color:whitesmoke"><i class="icofont-sort"></i>Serious
                                                            Cases</th>
                                                        <th style="color:whitesmoke"><i class="icofont-sort"></i>Active
                                                            Cases</th>
                                                        <th style="color:whitesmoke;"><i class="icofont-sort"></i>Total
                                                            Recovered
                                                        </th>
                                                        <th style="color:whitesmoke"><i class="icofont-sort"></i>Cases/M
                                                            Population
                                                        </th>
                                                        <th style="color:whitesmoke"><i
                                                                class="icofont-sort"></i>Deaths/M
                                                            Population
                                                        </th>
                                                        <th style="color:whitesmoke"><i class="icofont-sort"></i>First
                                                            Case
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody id="tb-content-2">
                                                </tbody>
                                            </table>

                                            <h1>Active Cases Table</h1>
                                            <div class="row float-right mr-1 mb-1"><input id="myInput-2" type="text"
                                                    placeholder="Search by location">
                                            </div>
                                            <table
                                                class="table text-center table-striped table-bordered table-responsive-sm"
                                                id="country-table-2">

                                                <thead class="thead-dark">
                                                    <tr class="text-center">
                                                        <th style="color:whitesmoke"><i class="icofont-sort"></i>COUNTRY
                                                        </th>
                                                        <th style="color:whitesmoke"><i
                                                                class="icofont-sort"></i>Confirmed
                                                            Cases
                                                        </th>
                                                        <th style="color:whitesmoke"><i class="icofont-sort"></i>New
                                                            cases
                                                        </th>
                                                        <th style="color:whitesmoke;"><i class="icofont-sort"></i>Total
                                                            Deaths</th>
                                                        <th style="color:whitesmoke"><i class="icofont-sort"></i>New
                                                            Deaths
                                                        </th>
                                                        <th style="color:whitesmoke"><i class="icofont-sort"></i>Serious
                                                            Cases</th>
                                                        <th style="color:whitesmoke"><i class="icofont-sort"></i>Active
                                                            Cases</th>
                                                        <th style="color:whitesmoke;"><i class="icofont-sort"></i>Total
                                                            Recovered
                                                        </th>
                                                        <th style="color:whitesmoke"><i class="icofont-sort"></i>Cases/M
                                                            Population
                                                        </th>
                                                        <th style="color:whitesmoke"><i
                                                                class="icofont-sort"></i>Deaths/M
                                                            Population
                                                        </th>
                                                        <th style="color:whitesmoke"><i class="icofont-sort"></i>First
                                                            Case
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody id="tb-content-2">
                                                </tbody>
                                            </table>


                                        </div>

                                    </div>
                                </div>
                                <p style="background-color: #bee5eb;">*Highlighted in green all cases have had an
                                    outcome.</p>
                                <p style="color: lightgrey;">*The above table is being updated based on hourly
                                    curated data from multiple sources and new cases are computed based on changes
                                    from previous day and are updated at GMT +0</p>


                            </div>

                        </div>

                    </div>
                    <div class="tab-pane fade show " id="corona-mapview" role="tabpane02"
                        aria-labelledby="corona-mapview-tab">
                        <div class="container">
                            <div class="row">
                                <iframe src="https://planetvitals.com/map.html" width="100%" height="450px"></iframe>
                            </div>
                            <div class="row py-5">
                                <h3 style="color:grey;">
                                    Corona Virus Confirmed Fatality Rate by Age
                                </h3>
                                <canvas id="bar-chart-byage" width="100%"></canvas>
                                <p style="color:grey;">*Death Rate = (number of deaths / number of cases) =
                                    probability of dying if infected by the virus (%). The percentages do not have
                                    to add up to 100%, as they do NOT represent share of deaths by age group.</p>
                            </div>
                            <div class="row py-5>">
                                <h3 style="color:grey;">
                                    Corona Virus Confirmed Fatality Rate by SEX
                                </h3>
                                <canvas id="bar-chart-bysex" width="100%"></canvas>
                                <p style="color:grey;">*Death Rate = (number of deaths / number of cases) =
                                    probability of dying if infected by the virus (%). The percentages do not have
                                    to add up to 100%, as they do NOT represent share of deaths by sex.</p>
                            </div>
                            <div class="row py-5>">
                                <h3 style="color:grey;">
                                    Corona Virus Confirmed Fatality Rate by COMORBIDITY
                                </h3>
                                <canvas id="bar-chart-bycomorbidity" width="100%"></canvas>
                                <p style="color:grey;">*Death Rate = (number of deaths / number of cases) =
                                    probability of dying if infected by the virus (%). The percentages do not have
                                    to add up to 100%, as they do NOT represent share of deaths by condition.</p>
                            </div>
                        </div>
                    </div>

                </div>


            </div>

        </div>
        <!--STATS table END-->







        <!--HELP TAB BEGINS-->
        <div class="tab-pane fade" id="corona-help" role="tabpanel" aria-labelledby="corona-help-tab">

            <section class="about-lists">
                <!-- <div class="container"> -->
                <h1 class="text-center pt-2" style="color: slategrey;">Help & information </h1><br> <br>

                <div class="row d-flex justify-content-center">
                    <div class=" col-md-6 col-sm-12 mt-4 ">
                        <div class="card text-center" style="width: 100%;">
                            <div class="card-header"><span>
                                    Help & information</span> <button class="btn btn-danger btn-sm">
                                    <i class=" icofont-warning">COVID-19 Alert</i></button>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item"> <strong> Information about COVID-19 in the United
                                        States</strong> <br>
                                    <span style="font-family: 'Roboto', sans-serif; color: #5f6368;">Centers
                                        for Disease Control and Prevention</span><br>
                                    <a href="https://www.cdc.gov/coronavirus/2019-ncov/about/index.html">
                                        <button type="button" class="btn btn-primary" style="border-radius: 2rem;">
                                            <i class="icofont-earth" style="color: white;"></i> cdc.gov
                                        </button>
                                    </a>
                                </li>
                                <li class="list-group-item"> <strong>Symptoms & testing</strong> <br>
                                    <span style="font-family: 'Roboto', sans-serif; color: #5f6368;">Centers for
                                        Disease Control and Prevention</span><br>
                                    <a href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/">
                                        <button type="button" class="btn btn-primary" style="border-radius: 2rem;">
                                            <i class=" icofont-earth" style="color: white;"></i> cdc.gov
                                        </button>
                                    </a>
                                </li>
                                <li class="list-group-item"> <strong> Coronavirus advisory information</strong>
                                    <br>
                                    <span style="font-family: 'Roboto', sans-serif; color: #5f6368;">World
                                        Health
                                        Organization</span><br>
                                    <a
                                        href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public">
                                        <button type="button" class="btn btn-primary" style="border-radius: 2rem;">
                                            <i class=" icofont-earth" style="color: white;"></i> who.int
                                        </button>
                                    </a>
                                </li>
                                <li class="list-group-item"> <strong> Coronavirus condition overview</strong>
                                    <br>
                                    <span style="font-family: 'Roboto', sans-serif; color: #5f6368;">World
                                        Health
                                        Organization</span><br>
                                    <a href="https://www.who.int/health-topics/coronavirus#tab=tab_1">
                                        <button type="button" class="btn btn-primary" style="border-radius: 2rem;">
                                            <i class=" icofont-earth" style="color: white;"></i> who.int
                                        </button>
                                    </a>
                                </li>
                                <li class="list-group-item"> <strong> Coronavirus Q&A</strong> <br>
                                    <span style="font-family: 'Roboto', sans-serif; color: #5f6368;">World
                                        Health
                                        Organization</span><br>
                                    <a href="https://www.who.int/news-room/q-a-detail/q-a-coronaviruses">
                                        <button type="button" class="btn btn-primary" style="border-radius: 2rem;">
                                            <i class=" icofont-earth" style="color: white;"></i> who.int
                                        </button>
                                    </a>


                                </li>

                            </ul>
                        </div>

                    </div>

                    <div class="col-md-6 col-sm-12 mt-4">
                        <div class="card " style="width: 100%;">
                            <div class="card-header">
                                <strong> What To Do if You Are Sick.</strong>
                            </div>
                            <ul style="list-style-type:disc; float: left;">
                                <li style="font-family: 'Roboto', sans-serif; color: #5f6368;">
                                    Stay home except to get medical care.
                                </li>
                                <li style="font-family: 'Roboto', sans-serif; color: #5f6368;">
                                    Separate yourself from other people in your home.
                                </li>
                                <li style="font-family: 'Roboto', sans-serif; color: #5f6368;">
                                    Call ahead before visiting your doctor
                                </li>
                                <li style="font-family: 'Roboto', sans-serif; color: #5f6368;">
                                    Wear a
                                    facemask if you are sick
                                </li>
                                <li style="font-family: 'Roboto', sans-serif; color: #5f6368;">
                                    Cover your coughs and sneezes
                                </li>
                                <li style="font-family: 'Roboto', sans-serif; color: #5f6368;">
                                    Clean your hands often
                                </li>
                                <li style="font-family: 'Roboto', sans-serif; color: #5f6368;">
                                    Avoid sharing personal household items
                                </li>
                                <li style="font-family: 'Roboto', sans-serif; color: #5f6368;">
                                    Clean all “high-touch” surfaces everyday
                                </li>
                                <li style="font-family: 'Roboto', sans-serif; color: #5f6368;">
                                    Monitor your symptoms

                                </li>

                            </ul>
                        </div><br>




                        <div class="card " style="width: 100%;">
                            <div class="card-header">
                                <strong>When can you discontinue home isolation.</strong>
                            </div>

                            <ul style="list-style:circle;">
                                <li style="font-family: 'Roboto', sans-serif; color: #5f6368;">
                                    You have had no fever for at least 72 hours.(three full days of no
                                    fever without the use medicine)
                                </li>
                                <li style="font-family: 'Roboto', sans-serif; color: #5f6368;">
                                    Other symptoms have improved.(for example, when your cough or shortness of
                                    breath have improved)
                                </li>
                                <li style="font-family: 'Roboto', sans-serif; color: #5f6368;">
                                    At least 7 days have passed since your symptoms first appeared.
                                </li>
                                <li style=" font-family: 'Roboto' , sans-serif; color: #5f6368;">
                                    You no longer have a fever.(without the use medicine that reduces fevers)
                                </li>
                                <li style="font-family: 'Roboto', sans-serif; color: #5f6368;">
                                    You received two negative tests in a row, 24 hours apart. Your doctor will
                                    follow CDC guidelines.
                                </li>
                            </ul>


                        </div>

                    </div>




                </div>


                <!-- </div> -->
                <!-- </section> -->

        </div><br><br><br>



    </div> -->
    <!--HELP TAB ENDS-->




    </div>
    <!--TABs END-->
    </div>
    <!-- Theme JavaScript -->
    <!-- Vendor JS Files -->
    <script src="assets/vendor/jquery/jquery.min.js"></script>
    <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="assets/vendor/jquery.easing/jquery.easing.min.js"></script>
    <script src="assets/vendor/php-email-form/validate.js"></script>
    <script src="assets/vendor/jquery-sticky/jquery.sticky.js"></script>
    <script src="assets/vendor/venobox/venobox.min.js"></script>
    <script src="assets/vendor/waypoints/jquery.waypoints.min.js"></script>
    <script src="assets/vendor/counterup/counterup.min.js"></script>
    <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
    <script src="assets/vendor/aos/aos.js"></script>



    <!-- dark mode -->
    <script src="https://cdn.jsdelivr.net/npm/darkmode-js@1.5.5/lib/darkmode-js.min.js"></script>
    <script src="assets/js/darkmode.js"></script>



    <!-- Template Main JS File -->
    <script src="assets/js/main.min.js"></script>
    <script src="js/chart.js/Chart.min.js"></script>
    <script src="js/helper1.min.js"></script>
    <script src="js/areachart.min.js"></script>
    <!-- Theme JavaScript ends-->


    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous">
        </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous">
        </script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous">
        </script>


    <!--Custom Page JS-->
    <!--FAQ Script-->
    <script src="js/faq.min.js"></script>
    <!--news Script-->
    <script src="js/news_corona_all.min.js"></script>
    <!--content Script-->
    <script src="js/stat-all.min.js"></script>
    <script src="js/region-all-yesterday.min.js"></script>
    <script src="js/Region-all.min.js"></script>
    <script src="js/barchartbyage.min.js"></script>
    <script src="js/barchartbysex.min.js"></script>
    <script src="js/barchartbycomorbidity.min.js"></script>

    <!--search Script-->
    <script>
        $(document).ready(function () {
            $("#myInput-1").on("keyup", function () {
                var value = $(this).val().toLowerCase();
                $("#tb-content-1 tr").filter(function () {
                    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
                });
            });
        });
    </script>
    <script>
        $(document).ready(function () {
            $("#myInput-2").on("keyup", function () {
                var value = $(this).val().toLowerCase();
                $("#tb-content-2 tr").filter(function () {
                    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
                });
            });
        });
    </script>
</body>

</html>