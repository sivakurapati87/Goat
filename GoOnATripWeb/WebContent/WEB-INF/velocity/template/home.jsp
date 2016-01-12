<div class="container-fluid"
	style="width: 100%; background-image: url('resources/images/bg2.jpg'); background-repeat: no-repeat; background-size: cover; height: 660px">
	<table class="table">
		<tr>
			<td></td>
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
										
											<button ng-click="hc.search()"  value="Search" class=" form-control btn btn-primary btn-sm" ng-disabled="myForm.$invalid">
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