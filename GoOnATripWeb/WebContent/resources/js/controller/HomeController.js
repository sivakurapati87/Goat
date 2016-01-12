'use strict';

App.controller('HomeController', ['$scope', function($scope) {
          var self = this;
          self.loginObj = {from:null,to:null,date:null};//search fields
//          self.categories=async;
          
          $scope.remoteUrlRequestFn = function(str) {
              return {q: str};
            };
          self.opened = {start: false, end: false};
          
          self.open = function ($event, scheduleName) {
            $event.preventDefault();
            $event.stopPropagation();
            // closes any other windows
            for (var x in self.opened) {
              if (!(x === scheduleName)) self.opened[x] = false;
            }

            // closes or opens datepicker, depending on it's current state
            self.opened[scheduleName] = !self.opened[scheduleName];
          };
          self.dateOptions = {
        	      formatYear: 'yy',
        	      startingDay: 1
        	    };
        	    
          
          self.search = function() {
          };
          $scope.fromSelected = function(selected) {
              if (selected) {
                self.loginObj.from= selected.title;
              } else {
                console.log('cleared');
              }
            };
            $scope.toSelected = function(selected) {
                if (selected) {
                	self.loginObj.to = selected.title;
                } else {
                  console.log('cleared');
                }
              };

          
          $scope.countries = [
							{name: 'Bhandup'},
							{name: 'Mumbai'},
							{name: 'Visakhapatnam'},
							{name: 'Coimbatore'},
							{name: 'Delhi'},
							{name: 'Bangalore'},
							{name: 'Pune'},
							{name: 'Nagpur'},
							{name: 'Lucknow'},
							{name: 'Vadodara'},
							{name: 'Indore'},
							{name: 'Jalalpur'},
							{name: 'Bhopal'},
							{name: 'Kolkata'},
							{name: 'Kanpur'},
							{name: 'New Delhi'},
							{name: 'Faridabad'},
							{name: 'Rajkot'},
							{name: 'Ghaziabad'},
							{name: 'Chennai'},
							{name: 'Meerut'},
							{name: 'Agra'},
							{name: 'Jaipur'},
							{name: 'Jabalpur'},
							{name: 'Varanasi'},
							{name: 'Allahabad'},
							{name: 'Hyderabad'},
							{name: 'Noida'},
							{name: 'Howrah'},
							{name: 'Thane'},
							{name: 'Patiala'},
							{name: 'Chakan'},
							{name: 'Ahmedabad'},
							{name: 'Manipala'},
							{name: 'Mangalore'},
							{name: 'Panvel'},
							{name: 'Udupi'},
							{name: 'Rishikesh'},
							{name: 'Gurgaon'},
							{name: 'Mathura'},
							{name: 'Shahjahanpur'},
							{name: 'Bagpat'},
							{name: 'Sriperumbudur'},
							{name: 'Chandigarh'},
							{name: 'Ludhiana'},
							{name: 'Palakkad'},
							{name: 'Kalyan'},
							{name: 'Valsad'},
							{name: 'Ulhasnagar'},
							{name: 'Bhiwani'},
							{name: 'Shimla'},
							{name: 'Dehradun'},
							{name: 'Patna'},
							{name: 'Unnao'},
							{name: 'Tiruvallur'},
							{name: 'Kanchipuram'},
							{name: 'Jamshedpur'},
							{name: 'Gwalior'},
							{name: 'Karur'},
							{name: 'Erode'},
							{name: 'Gorakhpur'},
							{name: 'Ooty'},
							{name: 'Haldwani'},
							{name: 'Bikaner'},
							{name: 'Puducherry'},
							{name: 'Nalbari'},
							{name: 'Bellary'},
							{name: 'Vellore'},
							{name: 'Naraina'},
							{name: 'Mandi'},
							{name: 'Rupnagar'},
							{name: 'Jodhpur'},
							{name: 'Roorkee'},
							{name: 'Aligarh'},
							{name: 'Indraprast'},
							{name: 'Karnal'},
							{name: 'Tanda'},
							{name: 'Amritsar'},
							{name: 'Raipur'},
							{name: 'Pilani'},
							{name: 'Bilaspur'},
							{name: 'Srinagar'},
							{name: 'Guntur'},
							{name: 'Kakinada'},
							{name: 'Warangal'},
							{name: 'Tirumala - Tirupati'},
							{name: 'Nizamabad'},
							{name: 'Kadapa'},
							{name: 'Kuppam'},
							{name: 'Anantpur'},
							{name: 'Nalgonda'},
							{name: 'Potti'},
							{name: 'Nellore'},
							{name: 'Rajahmundry'},
							{name: 'Bagalkot'},
							{name: 'Kurnool'},
							{name: 'Secunderabad'},
							{name: 'Mahatma'},
							{name: 'Bharuch'},
							{name: 'Miraj'},
							{name: 'Nanded'},
							{name: 'Anand'},
							{name: 'Gandhinagar'},
							{name: 'Bhavnagar'},
							{name: 'Morvi'},
							{name: 'Aurangabad'},
							{name: 'Modasa'},
							{name: 'Patan'},
							{name: 'Solapur'},
							{name: 'Kolhapur'},
							{name: 'Junagadh'},
							{name: 'Akola'},
							{name: 'Bhuj'},
							{name: 'Karad'},
							{name: 'Jalgaon Jamod'},
							{name: 'Chandrapur'},
							{name: 'Maharaj'},
							{name: 'Dhule'},
							{name: 'Ponda'},
							{name: 'Dahod'},
							{name: 'Navsari'},
							{name: 'Panjim'},
							{name: 'Patel'},
							{name: 'Nashik'},
							{name: 'Amravati'},
							{name: 'Somnath'},
							{name: 'Ganpat'},
							{name: 'Karwar'},
							{name: 'Davangere'},
							{name: 'Raichur'},
							{name: 'Nagara'},
							{name: 'Kushalnagar'},
							{name: 'Hassan'},
							{name: 'Hubli'},
							{name: 'Bidar'},
							{name: 'Belgaum'},
							{name: 'Mysore'},
							{name: 'Dharwad'},
							{name: 'Kolar'},
							{name: 'TumkÅ«r'},
							{name: 'Tiruchi'},
							{name: 'Thiruvananthapuram'},
							{name: 'Kozhikode'},
							{name: 'Thrissur'},
							{name: 'Madurai'},
							{name: 'Thalassery'},
							{name: 'Kannur'},
							{name: 'Karaikudi'},
							{name: 'Thanjavur'},
							{name: 'Manor'},
							{name: 'Idukki'},
							{name: 'Thiruvarur'},
							{name: 'Alappuzha'},
							{name: 'Gandhigram'},
							{name: 'Kochi'},
							{name: 'Annamalainagar'},
							{name: 'Amet'},
							{name: 'Kottarakara'},
							{name: 'Kottayam'},
							{name: 'Tirunelveli'},
							{name: 'Mohan'},
							{name: 'Salem'},
							{name: 'Attingal'},
							{name: 'Chitra'},
							{name: 'Chengannur'},
							{name: 'Guwahati'},
							{name: 'Kalam'},
							{name: 'Ranchi'},
							{name: 'Shillong'},
							{name: 'Gangtok'},
							{name: 'Srikakulam'},
							{name: 'Tezpur'},
							{name: 'Bhubaneswar'},
							{name: 'Imphal'},
							{name: 'Sundargarh'},
							{name: 'Arunachal'},
							{name: 'Manipur'},
							{name: 'Bihar Sharif'},
							{name: 'Mandal'},
							{name: 'Dibrugarh'},
							{name: 'Darbhanga'},
							{name: 'Gaya'},
							{name: 'Bhagalpur'},
							{name: 'Kunwar'},
							{name: 'Barddhaman'},
							{name: 'Jadabpur'},
							{name: 'Kalyani'},
							{name: 'Cuttack'},
							{name: 'Barpeta'},
							{name: 'Jorhat'},
							{name: 'Kharagpur'},
							{name: 'Medinipur'},
							{name: 'Agartala'},
							{name: 'Saranga'},
							{name: 'Machilipatnam'},
							{name: 'Dhanbad'},
							{name: 'Silchar'},
							{name: 'Dumka'},
							{name: 'Kokrajhar'},
							{name: 'Bankura'},
							{name: 'Jalpaiguri'},
							{name: 'Durgapur'},
							{name: 'Kalinga'},
							{name: 'Palampur'},
							{name: 'Jammu'},
							{name: 'Dwarka'},
							{name: 'Faridkot'},
							{name: 'Udaipur'},
							{name: 'Raigarh'},
							{name: 'Hisar'},
							{name: 'Solan'},
							{name: 'Ajmer'},
							{name: 'Lala'},
							{name: 'Gurdaspur'},
							{name: 'Sultanpur'},
							{name: 'Jhansi'},
							{name: 'Vidisha'},
							{name: 'Jagdalpur'},
							{name: 'Dipas'},
							{name: 'Sawi'},
							{name: 'Etawah'},
							{name: 'Saharanpur'},
							{name: 'Ujjain'},
							{name: 'Kangra'},
							{name: 'Bhilai'},
							{name: 'Rohtak'},
							{name: 'Haryana'},
							{name: 'Ambala'},
							{name: 'Bareilly'},
							{name: 'Bhoj'},
							{name: 'Kapurthala Town'},
							{name: 'Sangrur'},
							{name: 'Pusa'},
							{name: 'Sagar'},
							{name: 'Rewa'},
							{name: 'Bhawan'},
							{name: 'Rampur'},
							{name: 'Bhadohi'},
							{name: 'Cuddalore'},
							{name: 'Khopoli'},
							{name: 'Bali'},
							{name: 'Bhiwandi'},
							{name: 'Vasai'},
							{name: 'Badlapur'},
							{name: 'Sambalpur'},
							{name: 'Raurkela'},
							{name: 'Brahmapur'},
							{name: 'Visnagar'},
							{name: 'Surendranagar'},
							{name: 'Ankleshwar'},
							{name: 'Dahanu'},
							{name: 'Silvassa'},
							{name: 'Jamnagar'},
							{name: 'Dhansura'},
							{name: 'Muzaffarpur'},
							{name: 'Wardha'},
							{name: 'Bodhan'},
							{name: 'Parappanangadi'},
							{name: 'Malappuram'},
							{name: 'Vizianagaram'},
							{name: 'Mavelikara'},
							{name: 'Pathanamthitta'},
							{name: 'Satara'},
							{name: 'Janjgir'},
							{name: 'Gold'},
							{name: 'Himatnagar'},
							{name: 'Bodinayakkanur'},
							{name: 'Gandhidham'},
							{name: 'Mahabalipuram'},
							{name: 'Nadiad'},
							{name: 'Virar'},
							{name: 'Bahadurgarh'},
							{name: 'Kaithal'},
							{name: 'Siliguri'},
							{name: 'Tiruppur'},
							{name: 'Ernakulam'},
							{name: 'Jalandhar'},
							{name: 'Barakpur'},
							{name: 'Kavaratti'},
							{name: 'Ratnagiri'},
							{name: 'Moga'},
							{name: 'Hansi'},
							{name: 'Sonipat'},
							{name: 'Bandra'},
							{name: 'Aizawl'},
							{name: 'Itanagar'},
							{name: 'Nagar'},
							{name: 'Ghatkopar'},
							{name: 'Chen'},
							{name: 'Powai'},
							{name: 'Bhimavaram'},
							{name: 'Bhongir'},
							{name: 'Medak'},
							{name: 'Karimnagar'},
							{name: 'Narsapur'},
							{name: 'Vijayawada'},
							{name: 'Markapur'},
							{name: 'Mancherial'},
							{name: 'Sangli'},
							{name: 'Moradabad'},
							{name: 'Alipur'},
							{name: 'Ichalkaranji'},
							{name: 'Devgarh'},
							{name: 'Yavatmal'},
							{name: 'Hinganghat'},
							{name: 'Madgaon'},
							{name: 'Verna'},
							{name: 'Katra'},
							{name: 'Bilaspur'},
							{name: 'Uttarkashi'},
							{name: 'Muktsar'},
							{name: 'Bhatinda'},
							{name: 'Pathankot'},
							{name: 'Khatauli'},
							{name: 'Vikasnagar'},
							{name: 'Kollam'},
							{name: 'Kovilpatti'},
							{name: 'Kovvur'},
							{name: 'Paloncha'},
							{name: 'Vasco'},
							{name: 'Alwar'},
							{name: 'Bijapur'},
							{name: 'Tinsukia'},
							{name: 'Ratlam'},
							{name: 'Kalka'},
							{name: 'Ladwa'},
							{name: 'Rajpura'},
							{name: 'Batala'},
							{name: 'Hoshiarpur'},
							{name: 'Katni'},
							{name: 'Bhilwara'},
							{name: 'Jhajjar'},
							{name: 'Lohaghat'},
							{name: 'Mohali'},
							{name: 'Dhuri'},
							{name: 'Thoothukudi'},
							{name: 'Sivakasi'},
							{name: 'Coonoor'},
							{name: 'Shimoga'},
							{name: 'Kayamkulam'},
							{name: 'Namakkal'},
							{name: 'Dharmapuri'},
							{name: 'Aluva'},
							{name: 'Antapur'},
							{name: 'Tanuku'},
							{name: 'Eluru'},
							{name: 'Balasore'},
							{name: 'Hingoli'},
							{name: 'Quepem'},
							{name: 'Assagao'},
							{name: 'Betim'},
							{name: 'Cuncolim'},
							{name: 'Ahmednagar'},
							{name: 'Goa'},
							{name: 'Caranzalem'},
							{name: 'Chopda'},
							{name: 'Petlad'},
							{name: 'Raipur'},
							{name: 'Villupuram'},
							{name: 'Shoranur'},
							{name: 'Dasua'},
							{name: 'Gonda'},
							{name: 'Yadgir'},
							{name: 'Palladam'},
							{name: 'Nuzvid'},
							{name: 'Kasaragod'},
							{name: 'Paonta Sahib'},
							{name: 'Sarangi'},
							{name: 'Anantapur'},
							{name: 'Kumar'},
							{name: 'Kaul'},
							{name: 'Panipat'},
							{name: 'Uppal'},
							{name: 'Teri'},
							{name: 'Tiruvalla'},
							{name: 'Jamal'},
							{name: 'Chakra'},
							{name: 'Narasaraopet'},
							{name: 'Dharamsala'},
							{name: 'Ranjan'},
							{name: 'Garhshankar'},
							{name: 'Haridwar'},
							{name: 'Chinchvad'},
							{name: 'Narela'},
							{name: 'Aurangabad'},
							{name: 'Sion'},
							{name: 'Kalamboli'},
							{name: 'Chittoor'},
							{name: 'Wellington'},
							{name: 'Nagapattinam'},
							{name: 'Karaikal'},
							{name: 'Pollachi'},
							{name: 'Thenkasi'},
							{name: 'Aranmula'},
							{name: 'Koni'},
							{name: 'Ariyalur'},
							{name: 'Ranippettai'},
							{name: 'Kundan'},
							{name: 'Lamba Harisingh'},
							{name: 'Surana'},
							{name: 'Ghana'},
							{name: 'Lanka'},
							{name: 'Kataria'},
							{name: 'Kotian'},
							{name: 'Khan'},
							{name: 'Salt Lake City'},
							{name: 'Bala'},
							{name: 'Vazhakulam'},
							{name: 'Paravur'},
							{name: 'Nabha'},
							{name: 'Ongole'},
							{name: 'Kaladi'},
							{name: 'Jajpur'},
							{name: 'Thenali'},
							{name: 'Mohala'},
							{name: 'Mylapore'},
							{name: 'Bank'},
							{name: 'Khammam'},
							{name: 'Ring'},
							{name: 'Maldah'},
							{name: 'Kavali'},
							{name: 'Andheri'},
							{name: 'Baddi'},
							{name: 'Mahesana'},
							{name: 'Nila'},
							{name: 'Gannavaram'},
							{name: 'Cumbum'},
							{name: 'Belapur'},
							{name: 'Phagwara'},
							{name: 'Rander'},
							{name: 'Siuri'},
							{name: 'Bulandshahr'},
							{name: 'Bilimora'},
							{name: 'Guindy'},
							{name: 'Pitampura'},
							{name: 'Baharampur'},
							{name: 'Dadri'},
							{name: 'Boisar'},
							{name: 'Shiv'},
							{name: 'Multi'},
							{name: 'Bhadath'},
							{name: 'Ulubari'},
							{name: 'Palghar'},
							{name: 'Puras'},
							{name: 'Sikka'},
							{name: 'Saha'},
							{name: 'Godhra'},
							{name: 'Dam Dam'},
							{name: 'Ekkattuthangal'},
							{name: 'Sahibabad'},
							{name: 'Kalol'},
							{name: 'Bardoli'},
							{name: 'Wai'},
							{name: 'Shirgaon'},
							{name: 'Nehra'},
							{name: 'Mangalagiri'},
							{name: 'Latur'},
							{name: 'Kottakkal'},
							{name: 'Rewari'},
							{name: 'Ponnani'},
							{name: 'Narayangaon'},
							{name: 'Hapur'},
							{name: 'Kalpetta'},
							{name: 'Khurja'},
							{name: 'Ramnagar'},
							{name: 'Neral'},
							{name: 'Sendhwa'},
							{name: 'Talegaon Dabhade'},
							{name: 'Kargil'},
							{name: 'Manali'},
							{name: 'Jalalabad'},
							{name: 'Palani'},
							{name: 'Sirkazhi'},
							{name: 'Krishnagiri'},
							{name: 'Hiriyur'},
							{name: 'Muzaffarnagar'},
							{name: 'Kashipur'},
							{name: 'Gampalagudem'},
							{name: 'Siruseri'},
							{name: 'Manjeri'},
							{name: 'Raniganj'},
							{name: 'Mahim'},
							{name: 'Bhusawal'},
							{name: 'Tirur'},
							{name: 'Sattur'},
							{name: 'Angul'},
							{name: 'Puri'},
							{name: 'Khurda'},
							{name: 'Dharavi'},
							{name: 'Ambur'},
							{name: 'Vashi'},
							{name: 'Arch'},
							{name: 'Colaba'},
							{name: 'Hosur'},
							{name: 'Kota'},
							{name: 'Hugli'},
							{name: 'Anantnag'},
							{name: 'Murshidabad'},
							{name: 'Jharsuguda'},
							{name: 'Jind'},
							{name: 'Neyveli'},
							{name: 'Vaniyambadi'},
							{name: 'Srikalahasti'},
							{name: 'Liluah'},
							{name: 'Pali'},
							{name: 'Bokaro'},
							{name: 'Sidhi'},
							{name: 'Asansol'},
							{name: 'Darjeeling'},
							{name: 'Kohima'},
							{name: 'Shahdara'},
							{name: 'Chandannagar'},
							{name: 'Nadgaon'},
							{name: 'Haripad'},
							{name: 'Sitapur'},
							{name: 'Vapi'},
							{name: 'Bambolim'},
							{name: 'Baidyabati'},
							{name: 'Connaught Place'},
							{name: 'Singtam'},
							{name: 'Shyamnagar'},
							{name: 'Sikar'},
							{name: 'Choolai'},
							{name: 'Mayapur'},
							{name: 'Puruliya'},
							{name: 'Habra'},
							{name: 'Kanchrapara'},
							{name: 'Goregaon'},
							{name: 'Tiptur'},
							{name: 'Kalpakkam'},
							{name: 'Serampore'},
							{name: 'Konnagar'},
							{name: 'Port Blair'},
							{name: 'Canning'},
							{name: 'Mahad'},
							{name: 'Alibag'},
							{name: 'Pimpri'},
							{name: 'Panchgani'},
							{name: 'Karjat'},
							{name: 'Vaikam'},
							{name: 'Mhow'},
							{name: 'Lakhimpur'},
							{name: 'Madhoganj'},
							{name: 'Kheri'},
							{name: 'Gudivada'},
							{name: 'Avanigadda'},
							{name: 'Nayagarh'},
							{name: 'Bemetara'},
							{name: 'Bhatapara'},
							{name: 'Ramgarh'},
							{name: 'Dhubri'},
							{name: 'Goshaingaon'},
							{name: 'Bellare'},
							{name: 'Puttur'},
							{name: 'Narnaul'},
							{name: 'Porbandar'},
							{name: 'Keshod'},
							{name: 'Dhrol'},
							{name: 'Kailaras'},
							{name: 'Morena'},
							{name: 'Deolali'},
							{name: 'Banda'},
							{name: 'Orai'},
							{name: 'Fatehpur'},
							{name: 'Mirzapur'},
							{name: 'Adilabad'},
							{name: 'Pithapuram'},
							{name: 'Ramavaram'},
							{name: 'Amalapuram'},
							{name: 'Champa'},
							{name: 'Ambikapur'},
							{name: 'Korba'},
							{name: 'Pehowa'},
							{name: 'Yamunanagar'},
							{name: 'Shahabad'},
							{name: 'Hamirpur'},
							{name: 'Gulbarga'},
							{name: 'Sagar'},
							{name: 'Bhadravati'},
							{name: 'Sirsi'},
							{name: 'Honavar'},
							{name: 'Siruguppa'},
							{name: 'Koppal'},
							{name: 'Gargoti'},
							{name: 'Kankauli'},
							{name: 'Jalna'},
							{name: 'Parbhani'},
							{name: 'Koraput'},
							{name: 'Barpali'},
							{name: 'Jaypur'},
							{name: 'Banswara'},
							{name: 'Tindivanam'},
							{name: 'Mettur'},
							{name: 'Srirangam'},
							{name: 'Deoria'},
							{name: 'Basti'},
							{name: 'Padrauna'},
							{name: 'Budaun'},
							{name: 'Bolpur'},
							{name: 'Gujrat'},
							{name: 'Balurghat'},
							{name: 'Binnaguri'},
							{name: 'Guruvayur'},
							{name: 'Chandauli'},
							{name: 'Madikeri'},
							{name: 'Piduguralla'},
							{name: 'Vinukonda'},
							{name: 'Berasia'},
							{name: 'Sultans Battery'},
							{name: 'Ramanagaram'},
							{name: 'Angadipuram'},
							{name: 'Mattanur'},
							{name: 'Gobichettipalayam'},
							{name: 'Banga'},
							{name: 'Sibsagar'},
							{name: 'Namrup'},
							{name: 'North Lakhimpur'},
							{name: 'Dhenkanal'},
							{name: 'Karanja'},
							{name: 'Cheyyar'},
							{name: 'Vandavasi'},
							{name: 'Arakkonam'},
							{name: 'Tiruvannamalai'},
							{name: 'Akividu'},
							{name: 'Tadepallegudem'},
							{name: 'Madanapalle'},
							{name: 'Puttur'},
							{name: 'Edavanna'},
							{name: 'Kodungallur'},
							{name: 'Marmagao'},
							{name: 'Sanquelim'},
							{name: 'Sakri'},
							{name: 'Shahdol'},
							{name: 'Satna'},
							{name: 'Thasra'},
							{name: 'Bundi'},
							{name: 'Kishangarh'},
							{name: 'Firozpur'},
							{name: 'Kot Isa Khan'},
							{name: 'Barnala'},
							{name: 'Sunam'},
							{name: 'Pithoragarh'},
							{name: 'Jaspur'},
							{name: 'Jhargram'},
							{name: 'Dimapur'},
							{name: 'Churachandpur'},
							{name: 'Raxaul'},
							{name: 'Motihari'},
							{name: 'Munger'},
							{name: 'Purnea'},
							{name: 'Mannargudi'},
							{name: 'Kumbakonam'},
							{name: 'Eral'},
							{name: 'Nagercoil'},
							{name: 'Kanniyakumari'},
							{name: 'Ramanathapuram'},
							{name: 'Sivaganga'},
							{name: 'Rajapalaiyam'},
							{name: 'Srivilliputhur'},
							{name: 'Suratgarh'},
							{name: 'Gohana'},
							{name: 'Sirsa'},
							{name: 'Fatehabad'},
							{name: 'Nurpur'},
							{name: 'Chamba'},
							{name: 'Khergam'},
							{name: 'Dindigul'},
							{name: 'Pudukkottai'},
							{name: 'Kaimganj'},
							{name: 'Tarn Taran'},
							{name: 'Khanna'},
							{name: 'Irinjalakuda'},
							{name: 'Sehore'},
							{name: 'Parra'},
							{name: 'Dicholi'},
							{name: 'Chicalim'},
							{name: 'Saligao'},
							{name: 'Changanacheri'},
							{name: 'Igatpuri'},
							{name: 'Sangamner'},
							{name: 'Ganganagar'},
							{name: 'Kanhangad'},
							{name: 'Chidambaram'},
							{name: 'Chittur'},
							{name: 'Nilambur'},
							{name: 'Arvi'},
							{name: 'Jalesar'},
							{name: 'Kasganj'},
							{name: 'Chandausi'},
							{name: 'Beawar'},
							{name: 'Bharatpur'},
							{name: 'Kathua'},
							{name: 'Chalisgaon'},
							{name: 'Karamsad'},
							{name: 'Peranampattu'},
							{name: 'Arani'},
							{name: 'Payyanur'},
							{name: 'Pattambi'},
							{name: 'Pattukkottai'},
							{name: 'Pakala'},
							{name: 'Vikarabad'},
							{name: 'Bhatkal'},
							{name: 'Rupnarayanpur'},
							{name: 'Kulti'},
							{name: 'Koch Bihar'},
							{name: 'Nongstoin'},
							{name: 'Budbud'},
							{name: 'Balangir'},
							{name: 'Kharar'},
							{name: 'Mukerian'},
							{name: 'Mansa'},
							{name: 'Punalur'},
							{name: 'Mandya'},
							{name: 'Nandyal'},
							{name: 'Dhone'},
							{name: 'Candolim'},
							{name: 'Aldona'},
							{name: 'Solim'},
							{name: 'Daman'},
							{name: 'Koothanallur'},
							{name: 'Sojat'},
							{name: 'Alanallur'},
							{name: 'Kagal'},
							{name: 'Jhunjhunun'},
							{name: 'Sirhind'},
							{name: 'Kurali'},
							{name: 'Khinwara'},
							{name: 'Machhiwara'},
							{name: 'Talwandi Sabo'},
							{name: 'Malpur'},
							{name: 'Dhar'},
							{name: 'Medarametla'},
							{name: 'Pileru'},
							{name: 'Yercaud'},
							{name: 'Ottappalam'},
							{name: 'Alangulam'},
							{name: 'Palus'},
							{name: 'Chiplun'},
							{name: 'Durg'},
							{name: 'Damoh'},
							{name: 'Ambarnath'},
							{name: 'Haveri'},
							{name: 'Mundgod'},
							{name: 'Mandvi'},
							{name: 'Behala'},
							{name: 'Fort'},
							{name: 'Bela'},
							{name: 'Balana'},
							{name: 'Odhan'},
							{name: 'Mawana'},
							{name: 'Firozabad'},
							{name: 'Bichpuri'},
							{name: 'Almora'},
							{name: 'Pauri'},
							{name: 'Azamgarh'},
							{name: 'Phaphamau'},
							{name: 'Nongpoh'},
							{name: 'Gangrar'},
							{name: 'Jhalawar'},
							{name: 'Nathdwara'},
							{name: 'Jaisalmer'},
							{name: 'Pushkar'},
							{name: 'Sirohi'},
							{name: 'Baroda'},
							{name: 'Ambah'},
							{name: 'Ambejogai'},
							{name: 'Ambad'},
							{name: 'Osmanabad'},
							{name: 'Betalbatim'},
							{name: 'Gangapur'},
							{name: 'Dindori'},
							{name: 'Yeola'},
							{name: 'Pandharpur'},
							{name: 'Neri'},
							{name: 'Umred'},
							{name: 'Patelguda'},
							{name: 'Patancheru'},
							{name: 'Singarayakonda'},
							{name: 'Peddapuram'},
							{name: 'Gadag'},
							{name: 'ChikmagalÅ«r'},
							{name: 'Chikodi'},
							{name: 'Amer'},
							{name: 'Chintamani'},
							{name: 'Tambaram'},
							{name: 'Palayam'},
							{name: 'Karamadai'},
							{name: 'Omalur'},
							{name: 'Kuzhithurai'},
							{name: 'Faizabad'},
							{name: 'Thirumangalam'},
							{name: 'Kodaikanal'},
							{name: 'Devipattinam'},
							{name: 'Dharapuram'},
							{name: 'Rudrapur'},
							{name: 'Talcher'},
							{name: 'Haldia'},
							{name: 'Karsiyang'},
							{name: 'Sandur'},
							{name: 'Bapatla'},
							{name: 'Shamsabad'},
							{name: 'Kandi'},
							{name: 'Ramapuram'},
							{name: 'Anchal'},
							{name: 'Trimbak'},
							{name: 'Calangute'},
							{name: 'Arpora'},
							{name: 'Khargone'},
							{name: 'Mandla'},
							{name: 'Kalan'},
							{name: 'Pachmarhi'},
							{name: 'Dhamtari'},
							{name: 'Kumhari'},
							{name: 'Aundh'},
							{name: 'Tala'},
							{name: 'Tuljapur'},
							{name: 'Botad'},
							{name: 'Sidhpur'},
							{name: 'Sanand'},
							{name: 'Nagwa'},
							{name: 'Mussoorie'},
							{name: 'Vadamadurai'},
							{name: 'Sholavandan'},
							{name: 'Pochampalli'},
							{name: 'Perundurai'},
							{name: 'Lalgudi'},
							{name: 'Ponneri'},
							{name: 'Mount Abu'},
							{name: 'Vadner'},
							{name: 'Shanti Grama'},
							{name: 'Nalagarh'},
							{name: 'Pahalgam'},
							{name: 'Dinanagar'},
							{name: 'Jatani'},
							{name: 'Ganga'},
							{name: 'Barmer'},
							{name: 'Hoshangabad'},
							{name: 'Khajuraho Group of Monuments'},
							{name: 'Betul'},
							{name: 'Sangola'},
							{name: 'Tirumala'},
							{name: 'Mirza Murad'},
							{name: 'Attur'},
							{name: 'Budha'},
							{name: 'Pala'},
							{name: 'Tonk'},
							{name: 'Koni'},
							{name: 'Rajpur'},
							{name: 'Shrigonda'},
							{name: 'Hazaribagh'},
							{name: 'Nagaur'},
							{name: 'Mandapeta'},
							{name: 'Nabadwip'},
							{name: 'Nandurbar'},
							{name: 'Nazira'},
							{name: 'Kasia'},
							{name: 'Bargarh'},
							{name: 'Kollegal'},
							{name: 'Shahkot'},
							{name: 'Jagraon'},
							{name: 'Channapatna'},
							{name: 'Madurantakam'},
							{name: 'Kamalpur'},
							{name: 'Ranaghat'},
							{name: 'Mundra'},
							{name: 'Mashobra'},
							{name: 'Rama'},
							{name: 'Chirala'},
							{name: 'Bawana'},
							{name: 'Dhaka'},
							{name: 'Mahal'},
							{name: 'Chitradurga'},
							{name: 'Mandsaur'},
							{name: 'Dewas'},
							{name: 'Sachin'},
							{name: 'Andra'},
							{name: 'Kalkaji Devi'},
							{name: 'Pilkhuwa'},
							{name: 'Mehra'},
							{name: 'Chhachhrauli'},
							{name: 'Samastipur'},
							{name: 'Bangaon'},
							{name: 'Ghatal'},
							{name: 'Jayanti'},
							{name: 'Belgharia'},
							{name: 'Kamat'},
							{name: 'Dhariwal'},
							{name: 'Morinda'},
							{name: 'Kottagudem'},
							{name: 'Suriapet'},
							{name: 'Mahesh'},
							{name: 'Sirwani'},
							{name: 'Kanakpura'},
							{name: 'Mahajan'},
							{name: 'Sodhi'},
							{name: 'Chand'},
							{name: 'Nagal'},
							{name: 'Hong'},
							{name: 'Raju'},
							{name: 'Tikamgarh'},
							{name: 'Parel'},
							{name: 'Jaynagar'},
							{name: 'Mill'},
							{name: 'Khambhat'},
							{name: 'Ballabgarh'},
							{name: 'Begusarai'},
							{name: 'Shahapur'},
							{name: 'Banka'},
							{name: 'Golaghat'},
							{name: 'Palwal'},
							{name: 'Kalra'},
							{name: 'Chandan'},
							{name: 'Maru'},
							{name: 'Nanda'},
							{name: 'Chopra'},
							{name: 'Kasal'},
							{name: 'Rana'},
							{name: 'Chetan'},
							{name: 'Charu'},
							{name: 'Arora'},
							{name: 'Chhabra'},
							{name: 'Bishnupur'},
							{name: 'Manu'},
							{name: 'Karimganj'},
							{name: 'Ellora Caves'},
							{name: 'Adwani'},
							{name: 'Amreli'},
							{name: 'Soni'},
							{name: 'Sarwar'},
							{name: 'Balu'},
							{name: 'Rawal'},
							{name: 'Darsi'},
							{name: 'Nandigama'},
							{name: 'Mathan'},
							{name: 'Panchal'},
							{name: 'Jha Jha'},
							{name: 'Hira'},
							{name: 'Manna'},
							{name: 'Amal'},
							{name: 'Kheda'},
							{name: 'Abdul'},
							{name: 'Roshan'},
							{name: 'Bhandari'},
							{name: 'Binavas'},
							{name: 'Hari'},
							{name: 'Nandi'},
							{name: 'Rajapur'},
							{name: 'Suman'},
							{name: 'Sakri'},
							{name: 'Khalapur'},
							{name: 'Dangi'},
							{name: 'Thiruthani'},
							{name: 'Bawan'},
							{name: 'Basu'},
							{name: 'Kosamba'},
							{name: 'Medchal'},
							{name: 'Kakdwip'},
							{name: 'Kamalpura'},
							{name: 'Dogadda'},
							{name: 'Charan'},
							{name: 'Basirhat'},
							{name: 'Nagari'},
							{name: 'Kangayam'},
							{name: 'Sopara'},
							{name: 'Nadia'},
							{name: 'Mahulia'},
							{name: 'Alipur'},
							{name: 'Hamirpur'},
							{name: 'Fatehgarh'},
							{name: 'Bagh'},
							{name: 'Naini'},
							{name: 'Karari'},
							{name: 'Ajabpur'},
							{name: 'Jaunpur'},
							{name: 'Iglas'},
							{name: 'Pantnagar'},
							{name: 'Dwarahat'},
							{name: 'Dasna'},
							{name: 'Mithapur'},
							{name: 'Bali'},
							{name: 'Nilokheri'},
							{name: 'Kolayat'},
							{name: 'Haripur'},
							{name: 'Dang'},
							{name: 'Chhota Udepur'},
							{name: 'Matar'},
							{name: 'Sukma'},
							{name: 'Guna'},
							{name: 'Dona Paula'},
							{name: 'Navelim'},
							{name: 'Vainguinim'},
							{name: 'Curchorem'},
							{name: 'Balaghat'},
							{name: 'Bhagwan'},
							{name: 'Vijapur'},
							{name: 'Sinnar'},
							{name: 'Mangaon'},
							{name: 'Hadadi'},
							{name: 'Bobbili'},
							{name: 'Yanam'},
							{name: 'Udaigiri'},
							{name: 'Balanagar'},
							{name: 'Kanigiri'},
							{name: 'Muddanuru'},
							{name: 'Panruti'},
							{name: 'Proddatur'},
							{name: 'Puliyur'},
							{name: 'Perambalur'},
							{name: 'Turaiyur'},
							{name: 'Tiruchchendur'},
							{name: 'Shadnagar'},
							{name: 'Markal'},
							{name: 'Sultan'},
							{name: 'Rayagada'},
							{name: 'Kaniyambadi'},
							{name: 'Vandalur'},
							{name: 'Sangam'},
							{name: 'Katoya'},
							{name: 'Gudur'},
							{name: 'Farakka'},
							{name: 'Baramati'},
							{name: 'Tohana'}
                          ];

          
}]);
