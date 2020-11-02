import React,{Fragment} from 'react'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import DownloadLink from "react-download-link";
import ImageThumb from './ImageThumb'

const Mailing = ({infoMailing}) => {
	const imageComponent = ImageThumb;
     const html = `<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
     <head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<meta name="format-detection" content="telephone=no"/>
<!--[if !mso]><!-->
<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
<!--<![endif]--><!--[if gte mso 9]><xml>
    <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
</xml><![endif]-->
<title></title>
<style type="text/css">
div, p, a, li, td {-webkit-text-size-adjust:none; -ms-text-size-adjust:none;}
   body {min-width:100% !important; margin:0; padding:0;}
   #outlook a {padding:0;}
   .ReadMsgBody {width:100%;}
   .ExternalClass {width:100%;}
   .ExternalClass * {line-height:110%;}
   img {display:block; line-height:100%; border:0; outline:none; text-decoration:none; -ms-interpolation-mode:bicubic;}
   table {border-collapse:collapse !important; border-spacing:0; mso-table-lspace:0pt; mso-table-rspace:0pt;}
   table td {padding:0; border-collapse:collapse;}
   @media only screen and (min-device-width:320px) and (max-device-width:1024px) {
       a[href^="tel"], a[href^="sms"], a { cursor:default !important; text-decoration:none !important;}
   }
   @media only screen and (max-width:480px) {
       img.img100pc {width:100% !important; height: auto!important;}
       img.w-prod {width:120px !important; height: 79px !important;}
       img.w-prod-dest {width:130px !important; height: auto !important;}
       img.boton-app {padding-right:6px !important; padding-top:6px !important; width:22px !important; height: 22px !important;}
       table.hide, td.hide, span.hide, br.hide {display:none !important;}
       table.w100pc {width:100% !important;min-width:100% !important;}
       table.w95pc {width:95% !important;min-width:95% !important;}
       table.w90pc {width:90% !important;min-width:90% !important;}
       table.w80pc {width:80% !important;min-width:80% !important;}
       table.w70pc {width:70% !important;min-width:70% !important;}
       table.w65pc {width:65% !important;min-width:65% !important;}
       table.w60pc {width:60% !important;min-width:60% !important;}
       table.w55pc {width:55% !important;min-width:55% !important;}
       table.w50pc {width:50% !important;min-width:50% !important;}
       table.w48pc {width:48% !important;min-width:48% !important;}
       table.w44pc {width:44% !important;min-width:44% !important;}
       table.w40pc {width:40% !important;min-width:40% !important;}
       table.w30pc {width:30% !important;min-width:30% !important;}
       table.wh-boton {width:90% !important;min-width:90% !important; height: 35px !important;}
       table.htpd {width:90% !important;min-width:90% !important;}
       table.wh-boton-ver-mas {width:60% !important;min-width:60% !important; height: 45px !important;}
       td.w10 {width:10px !important;}
       td.h65 {height:65px !important;}
       td.h35 {height:20px !important;}
       td.h34 {height:34px !important;}
       td.h30 {height:30px !important;}
       td.h22 {height:22px !important;}
       td.h20 {height:20px !important;}
       td.h15 {height:15px !important;}
       td.h11 {height:11px !important;}
       td.h12 {height:12px !important;}
       td.h10 {height:10px !important;}
       td.h5 {height:5px !important;}
       td.disclaimer {font-size: 8px !important;}
       td.titulo1 {font-size: 20px !important;}
       td.horario {font-size: 13px !important;}
       td.titulo2 {font-size: 16px !important;}
       td.titulo-precio {font-size: 18px !important;}
       td.titulo-precio-ver-mas {font-size: 15px !important;}
       td.descripcion-oferta {padding-left: 2px !important; font-size: 10px !important;}
       td.descripcion-activar-oferta-app1 {font-size: 10px !important;}
       td.descripcion-activar-oferta-app2 {padding-left: 10px !important; font-size: 10px !important;}
       td.titulo-prod {padding-left: 1px !important; font-size: 11px !important;}
       td.detalle-precio { font-size: 11px !important;}
       td.detalle-precio2 { padding-left: 2px !important; font-size: 11px !important;}
       td.hide, br.hide {display: none !important;}
       span.w50 {width:50px !important;}
       span.w50-line-prod {width:50px !important;}
       span.w50-line-prod2 {margin-left: 2px !important; width:50px !important;}
       span.valor-precio {font-size: 12px !important;}
       span.texto-precio {font-size: 12px !important; vertical-align: middle !important;}
       table.w_284 {width:284px !important;}
       }

       @media only screen and (max-width:320px) {
            img.w-prod {width:120px !important; height: auto !important;}
            img.w-prod-dest {width:120px !important; height: 120px !important;}
       }
</style>
<!--[if (gte mso 9)|(IE)]>
    <style type="text/css" media="all">
        table {border-collapse:collapse;}
    </style>
    <![endif]-->
</head>
<body bgcolor="#ffffff" marginleft="0" marginright="0" margintop="0" style="min-width:100% !important; margin:0; padding:0;">
<table align="center" bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" width="100%">
	
		<tr>
		<!-- Emailer Starts Here-->
			<td align="center">
			<table align="center" border="0" cellpadding="0" cellspacing="0" class="w100pc" style="table-layout:fixed;width:650px;min-width:650px;" width="650">
				<tr>
					<td align="center" valign="top">
						<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
							<tr>
								<td height="10" style="line-height:10px; font-size:10px;"></td>
							</tr>
							<tr>
								<td align="center" valign="top">
									<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
										<tr>
											<td class="w10" width="35"></td>
											<td align="center" valign="top">
												<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
													<tr>
														<td align="center" class="disclaimer" class="white" style="font-family:Arial; font-size:9.5px; line-height:12px;  color:#666;">Para asegurar la entrega de nuestros e-mail en su correo, por favor<br>
															agregue <b style="color:#d03429;">ofertas@mail.unimarc.com</b> a su libreta de direcciones de correo.<br> Si usted no visualiza bien este mail, haga <a href="#SPCLICKTOVIEW" name="Visualizar" style="color:#d03429;text-decoration:none;" target="_blank" ><b>click aquí</b></a>.
														</td>
													</tr>
												</table>
											</td>
											<td class="w10" width="35"></td>
										</tr>
									</table>
								</td>
							</tr>
							<tr>
								<td height="10" style="line-height:10px; font-size:10px;"></td>
							</tr>
						</table>
					</td>
				</tr>
				<!-- END LOGO -->


				<!-- LOGO -->
				<tr>
					<td align="center" bgcolor="#ffffff" valign="top">
						<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
							<tr>
								<td bgcolor="#eceef1" height="1" style="line-height:1px; font-size:1px;"></td>
							</tr>

							<tr>
								<td class="h5" height="18"></td>
							</tr>

							<tr>
								<td align="center" valign="top"><a href="https://www.unimarc.cl/" target="_blank" ><img alt="logo_unimarc" border="0" src=´${imageComponent="infoMailing"}´ style="display:block; width: 138px;" width="138" /></a>
								</td>
							</tr>
							<tr>
								<td class="h5" height="18"></td>
							</tr>
						</table>
					</td>
				</tr>
				<!-- END LOGO -->


				<!-- BODY -->
				<tr>
					<td align="center" bgcolor="#fbfbfb" valign="top">
						<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">

							<!-- IMAGEN BANNER -->
							<tr>
								<td align="center" valign="top">
									<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
										<tr>
											<td align="center" valign="top"><img alt="" border="0" class="img100pc" 
												 src="img/imagen.jpg" style="display:block; width: 650px;" width="650"  />
											</td>
										</tr>
									</table>
								</td>
							</tr>
							<!-- HUINCHA HORA -->
							<tr>
								<td align="center" bgcolor="#D9291C" valign="top">
									<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
										<tbody><tr>
											<td class="w10" width="25"></td>
											<td align="center" valign="top">
												<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
													<tbody>
														<tr>
															<td class="h10" height="10"></td>
														</tr>
														<tr>
															<td align="center" class="horario" style="font-family:Arial; font-size:24px; color:#ffffff; font-weight: bold;" valign="top">	
																DOMINGOS ABIERTO DE 10:00 A 19:00 HRS
															</td>
															
														</tr>
													<tr>
														<td class="h10" height="10"></td>
													</tr>
													
												</tbody></table>
											</td>
											<td class="w10" width="25"></td>
										</tr>
									</tbody></table>
								</td>
							</tr>

							<!-- END IMAGEN BANNER -->


							<!-- ESPACIO -->
							<tr>
								<td class="h20" height="30"></td>
							</tr>
							<!-- END ESPACIO -->


							<!-- TEXTO PRINCIPAL -->
					


							<!-- END TEXTO PRINCIPAL -->

							<!-- ESPACIO -->
							<tr>
								<td class="h20" height="30"></td>
							</tr>
							<!-- END ESPACIO -->

							<!-- PRODUCTO DESTACADO 1A-->
							
				<!--=== HUINCHA MINSAL===-->
				<tr>
					<td align="center" valign="top">
						<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
							<tr>
								<td class="w10" width="35"></td>
								<td align="center" valign="middle"><img alt="" border="0" class="img100pc"  height="76" src="img/l-e.jpg" style="display:block;" width="650"  /></td>
								<td class="w10" width="35"></td>
							</tr>	
						</table>
					</td>
				</tr>
				<!--=== END HUINCHA MINSAL ===-->
				
			</table>
			</td>
		</tr>
		<!-- Emailer Ends Here //-->
	
</table>
</body>
</html>
     `;

     return (
          <Fragment>
               { ReactHtmlParser(html) }
               <DownloadLink
                    label="Descargar Link"
                    filename="prueba.html"
                    exportFile={() => html}
               />
          </Fragment>
     )
}

export default Mailing
