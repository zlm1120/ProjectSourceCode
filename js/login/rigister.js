var address=getipaddress();
getnumber();
function getnumber() {
	$('#member').click(function(){
		var aj=$.ajax({
			type:"get",
			url:address+'/api/member/register/mobileExists',
			async:true,
			data:{},
			cache: false,
			dataType: 'jsonp',
			success:function(jsonp){
				var datas=json.data;
				console.log(datas);
			}
		});
	});
	/*var deviceCode = $("#deviceCode").val();
	var ip = $("#ip").val();
	var selected = $("#sele-name option:selected").val();
	var seletext = $("#sele-name option:selected").text();
	var aj = $.ajax({
				url: ipAddress + '/admin/security/listByJson',
				data: {
					page: page,
					pageCount: pageSize,
					name: name,
					deviceCode: deviceCode,
					ip: ip,
					type: 1,
					communityId: selected
				},
				type: 'get',
				cache: false,
				dataType: 'json',
				success: function(json) {
						if (json.status == 0) {
							var dataRoes = json.data;
							var tbody = "";
							var num = pageSize * (page - 1) + 1;
							for (var i = 0; i < dataRoes.length; i++) {
								var row = dataRoes[i];
								tbody += "<tr><td>" + (num++) + "</td><td>" + row.deviceName + "</td>" +
									"<td>" + row.deviceCode + "</td>" +
									"<td>" + row.ip + "</td>" +
									"<td>" + row.port + "</td>" +
									"<td>" + row.account + "</td>" +
									"<td>" + row.password + "</td>" +
									"<td>" + row.channelNum + "</td>" +
									"<td>" + row.createDate + "</td>" + "<td>" + row.communityName + "</td>";

								tbody += "<td>" +
									"<a class='btn btn-xs btn-azure edits operateBtn' href='#roleUpdateView' data-toggle='modal' oid=" + row.securityId + "><i class='fa fa-transmit'></i>编辑</a>" +
									"<a class='btn btn-xs btn-danger delete operateBtn' href='#roleUpdateView' data-toggle='modal' oid=" + row.securityId + "><i class='fa fa-transmit'></i>删除</a>" +

									"<a class='btn btn-xs btn-azure update operateBtn' href='#roleUpdateView' data-toggle='modal' oid=" + row.securityId + "><i class='fa fa-transmit'></i>查看通道</a>" +
									"<a class='btn btn-xs btn-show accredit operateBtn' href='#roleUpdateView' data-toggle='modal' data-id=" + row.securityId + " oid=" + row.memberId + " coundsid=" + row.communityId + "><i class='fa fa-transmit'></i>查看成员</a>" +
									"</td>" +
									"</tr>";
*/
							}