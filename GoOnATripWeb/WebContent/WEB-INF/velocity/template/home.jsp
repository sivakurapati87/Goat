 <script>
    $(function(){

        $("#typed").typed({
            // strings: ["Typed.js is a <strong>jQuery</strong> plugin.", "It <em>types</em> out sentences.", "And then deletes them.", "Try it out!"],
            stringsElement: $('#typed-strings'),
            typeSpeed: 30,
            backDelay: 500,
            loop: true,
            contentType: 'html', // or text
            // defaults to false for infinite loop
            loopCount: false,
            callback: function(){ foo(); },
            resetCallback: function() { newTyped(); }
        });

        $(".reset").click(function(){
            $("#typed").typed('reset');
        });

    });

    function newTyped(){ /* A new typed object */ }

    function foo(){ console.log("Callback"); }

    </script>
    <style>
        /* code for animated blinking cursor */
        .typed-cursor{
            opacity: 1;
            font-weight: 100;
            -webkit-animation: blink 0.7s infinite;
            -moz-animation: blink 0.7s infinite;
            -ms-animation: blink 0.7s infinite;
            -o-animation: blink 0.7s infinite;
            animation: blink 0.7s infinite;
        }
        @-keyframes blink{
            0% { opacity:1; }
            50% { opacity:0; }
            100% { opacity:1; }
        }
        @-webkit-keyframes blink{
            0% { opacity:1; }
            50% { opacity:0; }
            100% { opacity:1; }
        }
        @-moz-keyframes blink{
            0% { opacity:1; }
            50% { opacity:0; }
            100% { opacity:1; }
        }
        @-ms-keyframes blink{
            0% { opacity:1; }
            50% { opacity:0; }
            100% { opacity:1; }
        }
        @-o-keyframes blink{
            0% { opacity:1; }
            50% { opacity:0; }
            100% { opacity:1; }
        }
    </style>

<div class="container-fluid"
	style="width: 100%; background-image: url('resources/images/bg2.jpg'); background-repeat: no-repeat; background-size: cover; height: 660px">
	<table class="table" border="0">
		<tr>
			<td style="padding-top: 260px" align="center" class="intro_text">
					<div style="width: 40%;float: left;text-align: right;">Travel &nbsp;</div>
					<div style="width: 60%;text-align: left;">
						<div class="type-wrap">
							<div id="typed-strings">
								<p>cheaper</p>
								<p>together</p>
								<p>safer</p>
								<p>easier</p>
								<p>faster</p>
							</div>
							<span id="typed" style="white-space: pre;"></span>
						</div>
					</div>
					<div style="clear: both;"></div>
			</td>
			<td width="30%" style="padding-top: 180px">
				<table border="0" style="width: 60%;">
					<tr>
						<td width="100%" class="bg">
							<form class="box" name="myForm">
								<table style="width: 90%;" align="center">
								
								<tr style="height: 10px"></tr>
									<tr>
										<td style="height: 30px">
										 <div angucomplete-alt id="fromId" placeholder="From e.g. Hyderabad"
												pause="100" selected-object="fromSelected"
												local-data="countries" search-fields="name"
												title-field="name" minlength="3"
												input-class="form-control form-control-small"
												match-class="highlight"></div>
										
											</td>
									</tr>
									<tr style="height: 2px"></tr>
									<tr>
										<td style="height: 30px">
										 <div angucomplete-alt id="toId" placeholder="To e.g. Vijayawada"
												pause="100" selected-object="toSelected"
												local-data="countries" search-fields="name"
												title-field="name" minlength="3"
												input-class="form-control form-control-small"
												match-class="highlight"></div>
										
											</td>
									</tr>
									
									<tr style="height: 2px"></tr>

									<tr>
										<td>
											<p class="input-group">
												<input type="text" class="form-control"
													ng-change="hc.pickDate()" datepicker-popup="dd-MMM-yyyy"
													id="startDate" ng-model="hc.searchObj.date"
													is-open="hc.opened.start"
													datepicker-options="hc.dateOptions" ng-required="true"
													close-text="Close" /> <span class="input-group-btn">
													<button type="button" class="btn btn-default"
														ng-click="hc.open($event, 'start')">
														<i class="glyphicon glyphicon-calendar"></i>
													</button>
												</span>
											</p>
										</td>
									</tr>
									<tr style="height: 2px"></tr>
									<tr>
										<td align="right">
										
											<button ng-click="hc.search()"  value="Search" class=" form-control btn btn-primary btn-sm" ng-disabled="hc.searchObj.isSearchDisabled">
											<span class="glyphicon glyphicon-search"></span>
											Search
											</button>
										</td>
									</tr>
									<tr style="height: 10px"></tr>
								</table>
							</form>
						</td>
					</tr>
				</table>
		</td>
		</tr>
	</table>
</div>