//import $ from 'jquery';

const queryString = window.location.search;
let searchParams = new URLSearchParams(queryString);
const email = searchParams.get('email');


let spinnerElement = document.querySelector('.spinner');
let noResultsElement = document.querySelector('.no-results');
let resultsElement = document.querySelector('.result');

let cardElement = document.querySelector('.result .card');



fetch(`https://ltv-data-api.herokuapp.com/api/v1/records.json?email=${email}`)
    .then(response => response.json())
    .then(data => {
        spinnerElement.classList.add('hide');
        console.log(data);
        if (data.length > 0) {
            noResultsElement.classList.remove('hide');
        } else {
            resultsElement.classList.remove('hide');

            let cardComponent =
                ` <div class="card-body">
                <div class="row mb-3">
                    <div class="col-2 d-none d-sm-block">
                        <div class="card-icon-profile">
                            <img src="assets/imgs/SVGs/icn_person.svg" />
                        </div>
                    </div>
                    <div class="col-10">
                        <div class="row mb-3">
                            <div class="col-12">
                                <h2 class="card-title">${data.first_name} ${data.last_name}</h2>
                                <p class="card-text">${data.description}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-12 col-md-6">
                                <div class="row mb-3">
                                    <div class="col-12">
                                        <h5 class="card-subtitle">Address</h5>
                                        <p class="card-text">${data.address}</p>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-12">
                                        <h5 class="card-subtitle">Email</h5>
                                        <p class="card-text">${data.email}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-6">
                                <div class="row mb-3">
                                    <div class="col-12">
                                        <h5 class="card-subtitle">Phone number</h5>
                                        <div class="card-info-wrappers">
                                            <p class="color-blue">${data.phone_numbers[0]}</p>
                                            <p class="color-blue">${data.phone_numbers[1]}</p>
                                            <p class="color-blue">${data.phone_numbers[2]}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-12">
                                        <h5 class="card-subtitle">Relatives</h5>
                                        <div class="card-info-wrappers">
                                            <p>${data.relatives[0]}</p>
                                            <p>${data.relatives[1]}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>`
            cardElement.innerHTML = cardComponent;
        }
    })