document.addEventListener("DOMContentLoaded", function() {
    const headHTML =`
    <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>belajarsosiologi.my.id</title>

    <!-- Botstrap -->
    <link href="/css/bootstrap.min.css" rel="stylesheet">

    <!-- Bootstrap icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    
    <!-- My Style -->
    <link rel="stylesheet" href="/css/style.css">
    </head>
    `;
    
    const navigasiHTML = `
    <!-- Navigasi -->
    <nav class="navbar navbar-expand-lg bg-body-tertiary shadow fixed-top">
        <div class="container-fluid">

            <!-- Dark Button -->
            <div class="form-check form-switch m-0">
                <input class="form-check-input p-2" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked
                    onclick="myFunction()" />
            </div>

            <!-- Logo -->
            <div class="navbar-brand fw-bold text-primary" href="#">belajar<span
                    class="text-danger">sosiologi.my.id</span>
            </div>

            <!-- Humburger Menu -->
            <button class="navbar-toggler btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <!-- Menu Kanan -->
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link" href="/index.html">Beranda</a></li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">Kelas
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li><a class=" nav-link dropdown-item" href="/kelas/fase-e.html">Kelas 10</a>
                            </li>
                            <li><a class="nav-link dropdown-item" href="/kelas/fase-f.html">Kelas 11</a></li>
                            <li><a class="nav-link dropdown-item" href="/kelas/fase-f2.html">Kelas 12</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">Coding
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li><a class="nav-link dropdown-item" href="/belajar-coding/belajar-html.html">html</a></li>
                            <li><a class="nav-link dropdown-item disabled" aria-disabled="true" href="#">css</a>
                            </li>
                            <li><a class="nav-link dropdown-item disabled" aria-disabled="true" href="#">javascript</a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">Sispala
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li><a class="nav-link dropdown-item disabled" aria-disabled="true" href="/sispala/profile.html">profile</a></li>
                            <li><a class="nav-link dropdown-item disabled" aria-disabled="true" href="/sispala/berita.html">berita</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <!-- Navigasi End -->
    `;

    const footerHTML =`   
    <!-- footer -->
        <!-- Tombol WA -->
    <a class="btn btn-success floating-btn btn-lg" href="https://wa.me/6287765881000" target="_blank"><i
            class="bi bi-whatsapp m-1"></i></a>
    <nav class="navbar navbar-expand-lg bg-body-tertiary mt-5">
        <div class="container-fluid">
            <a class="navbar-brand" href="https://sman2mengwi.sch.id/" target="_blank"><img src="/img/logo.png"
                    width="50" height="50"></a>
            <a class="navbar-brand" href="https://sman2mengwi.sch.id/" target="_blank"><b>Dwisma</b> | SMAN 2 Mengwi</a>
            <div class="navbar-collapse">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link"
                            href="https://www.youtube.com/channel/UCz6SfxL3mwHP1Xjz_JvBqvg" target="_blank"><i
                                class="bi bi-youtube m-1"></i>official
                            dwisma</a></li>
                    <li class="nav-item"><a class="nav-link" href="https://www.instagram.com/osisdwisma"
                            target="_blank"><i class="bi bi-instagram m-1"></i>osisdwisma</a>
                    </li>
                    <li class="nav-item"><a class="nav-link" href="https://web.facebook.com/SMAN2MENGWI"
                            target="_blank"><i class="bi bi-facebook m-1"></i>SMAN 2
                            Mengwi</a></li>
                </ul>
            </div>
        </div>
    </nav>
    `;

    document.getElementById("head-js").innerHTML = headHTML;

    document.getElementById("navigasi-js").innerHTML = navigasiHTML;

    document.getElementById("footer-js").innerHTML = footerHTML;
});

        // Dark & Light Mode Toogle
        function myFunction() {
            var element = document.body;
            element.dataset.bsTheme =
                element.dataset.bsTheme == "dark" ? "light" : "dark";
        }

                // Mesin Jam
        function updateTime() {
            var dateInfo = new Date();

            /* time */
            var hr,
                _min = (dateInfo.getMinutes() < 10) ? "0" + dateInfo.getMinutes() : dateInfo.getMinutes(),
                sec = (dateInfo.getSeconds() < 10) ? "0" + dateInfo.getSeconds() : dateInfo.getSeconds(),
                ampm = (dateInfo.getHours() >= 12) ? "PM" : "AM";

            // replace 0 with 12 at midnight, subtract 12 from hour if 13–23
            if (dateInfo.getHours() == 0) {
                hr = 12;
            } else if (dateInfo.getHours() > 12) {
                hr = dateInfo.getHours() - 12;
            } else {
                hr = dateInfo.getHours();
            }

            var currentTime = hr + ":" + _min + ":" + sec;

            // print time
            document.getElementsByClassName("hms")[0].innerHTML = currentTime;
            document.getElementsByClassName("ampm")[0].innerHTML = ampm;

            /* date */
            var dow = [
                "Minggu",
                "Senin",
                "Selasa",
                "Rabu",
                "Kamis",
                "Jumat",
                "Sabtu"
            ],
                month = [
                    "Januari",
                    "Februari",
                    "Maret",
                    "April",
                    "Mei",
                    "Juni",
                    "Juli",
                    "Agustus",
                    "September",
                    "Oktober",
                    "November",
                    "Desember"
                ],
                day = dateInfo.getDate();

            // store date
            var currentDate = dow[dateInfo.getDay()] + ", " + day + " " + month[dateInfo.getMonth()] + " 2024";

            document.getElementsByClassName("date")[0].innerHTML = currentDate;
        };

        
        // print time and date once, then update them every second
        updateTime();
        setInterval(function () {
            updateTime()
        }, 1000);
