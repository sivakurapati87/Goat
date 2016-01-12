<div class="container-fluid"
	style="width: 100%; background-image: url('resources/images/bg2.jpg'); background-repeat: no-repeat; background-size: cover; height: 660px">
	<table class="table">
		<tr>
			<td></td>
			<td width="30%">
				<table border="0" style="width: 60%">
					<tr>
						<td width="100%" class="bg">
							<form class="box ng-pristine ng-invalid ng-invalid-required">
								<table style="width: 90%;" align="center">
									<tr style="height: 10px"></tr>
									<tr>
										<td><input type="text" class="form-control"
											placeholder="From e.g. Hyderabad"></td>
									</tr>
									<tr style="height: 2px"></tr>
									<tr>
										<td><input class="form-control" type="text"
											placeholder="From e.g. Vijayawada"></td>
									</tr>
									<tr style="height: 10px"></tr>

									<tr>
										<td>
											<p>
												<label class="control-label" style="color: #AAB4BE"
													for="startDate">{{ vm.displayName }}</label>
											</p>
											<p class="input-group">
												<input type="text" class="form-control"
													ng-change="vm.pickDate()"
													datepicker-popup="yyyy-MM-dd HH:mm" id="startDate"
													ng-model="vm.date" is-open="vm.opened.start"
													datepicker-options="vm.dateOptions" ng-required="true"
													close-text="Close" /> <span class="input-group-btn">
													<button type="button" class="btn btn-default"
														ng-click="vm.open($event, 'start')">
														<i class="glyphicon glyphicon-calendar"></i>
													</button>
												</span>
											</p>
										</td>
									</tr>
								</table>
							</form>
						</td>
					</tr>
				</table>
			</td>
		</tr>
	</table>
</div>