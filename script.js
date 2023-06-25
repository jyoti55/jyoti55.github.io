document.addEventListener("DOMContentLoaded", function() {
    var jobList = document.getElementById("job-list");
    var searchInput = document.getElementById("search-input");
    var popularKeywords = ["React", "JavaScript", "Frontend", "Backend", "Full Stack", "Python", "Java", "Node.js"];
    

    // Autocomplete popular keywords
    function autocompleteKeywords() {
        var searchTerm = searchInput.value.toLowerCase();
        var autocompleteList = document.getElementById("autocomplete-list");

        autocompleteList.innerHTML = "";

        if (searchTerm.length === 0) {
            return;
        }

        var matchedKeywords = popularKeywords.filter(function(keyword) {
            return keyword.toLowerCase().startsWith(searchTerm);
        });

        matchedKeywords.forEach(function(keyword) {
            var listItem = document.createElement("li");
            listItem.textContent = keyword;
            listItem.addEventListener("click", function() {
                searchInput.value = keyword;
                performSearch();
            });
            autocompleteList.appendChild(listItem);
        });
    }


    


    // Dummy job data
    var jobs = [
        {
            position: "Senior Frontend Developer",
            timing: "Full Time",
            location: "Kathmandu",
            keywords: ["React", "Frontend", "JavaScript"],
            company: "DocSumo",
            company_logo: "https://storage.googleapis.com/programiz-static/hiring/software/job-listing-page-challenge/logos/docsumo-logo.jpeg",
            posted_on: 1687057261107
        },
        {
            "position": "Full Stack Developer",
            "timing": "Part Time",
            "location": "Remote",
            "keywords": ["Nodejs", "React", "SQL"],
            "company": "Fusemachines",
            "company_logo": "https://storage.googleapis.com/programiz-static/hiring/software/job-listing-page-challenge/logos/fusemachines-logo.png",
            "posted_on": 1686603737828
          },
          {
            "position": "Junior Backend Developer",
            "timing": "Full Time",
            "location": "Kathmandu",
            "keywords": ["C#", ".NET Core", "MySQL"],
            "company": "Naamche",
            "company_logo": "https://storage.googleapis.com/programiz-static/hiring/software/job-listing-page-challenge/logos/naamche-logo.png",
            "posted_on": 1686996104190
          },
          {
            "position": "Data Engineer",
            "timing": "Full Time",
            "location": "Lalitpur",
            "keywords": ["Apache Spark", "SQL", "ETL"],
            "company": "Techkraft",
            "company_logo": "https://storage.googleapis.com/programiz-static/hiring/software/job-listing-page-challenge/logos/techkraft-logo.jpeg",
            "posted_on": 1687140157619
          },
          {
            "position": "Senior QA Engineer",
            "timing": "Full Time",
            "location": "Pokhara",
            "keywords": ["Selenium", "Cypress", "Python"],
            "company": "JankariTech",
            "company_logo": "https://storage.googleapis.com/programiz-static/hiring/software/job-listing-page-challenge/logos/jankaritech-logo.png",
            "posted_on": 1686063779309
          },
          {
            "position": "Frontend Intern",
            "timing": "Full Time",
            "location": "Pokhara",
            "keywords": ["HTML", "CSS", "JavaScript"],
            "company": "Proshore",
            "company_logo": "https://storage.googleapis.com/programiz-static/hiring/software/job-listing-page-challenge/logos/proshore-logo.png",
            "posted_on": 1687230206051
          }
        ];

    // Populate job list
    function renderJobList(jobs) {
        jobList.innerHTML = "";

        jobs.forEach(function(job) {
            var listItem = document.createElement("li");
            listItem.innerHTML = `
                <div>
                    <img src="${job.company_logo}" alt="${job.company} logo" width="100" height="100">
                </div>
                <div>
                    <h3>${job.position}</h3>
                    <p>${job.company} - ${job.location}</p>
                    <p>Posted On: ${job.posted_on}</p>
                </div>
                <div id="btn">
                <button type="button">Apply Now</button>
                </div>
            `;
            jobList.appendChild(listItem);
        });
    }

    // Perform search based on keywords
    function performSearch() {
        var searchTerm = searchInput.value.toLowerCase();

        var filteredJobs = jobs.filter(function(job) {
            var jobKeywords = job.keywords.map(function(keyword) {
                return keyword.toLowerCase();
            });

            return jobKeywords.includes(searchTerm);
        });

        renderJobList(filteredJobs);
    }

    // Event listener for search input
    searchInput.addEventListener("input", performSearch);
    searchInput.addEventListener("input", autocompleteKeywords);

    // Initial rendering
    renderJobList(jobs);
});
