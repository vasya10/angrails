<!DOCTYPE html>
<html>
<head>
	<meta name="layout" content="main"/>
	<title>Angrails = Angular + Grails</title>
</head>

<body ng-app="angrailsApp">
<div id="hello" ng-controller="MainCtrl">{{helloText}}</div>

<div ng-controller="StarCatalogCtrl">
	<span><a href="#" ng-click="starCatalogShow = !starCatalogShow">Star Catalog</a></span>

	<div ng-show="starCatalogShow">
		<div>
			<table class="table table-hover">
				<tr>
					<th>Common name</th>
					<th>Constellation</th>
					<th>Bayer Designation</th>
					<th>Distance from Earth (light years)</th>
				</tr>

				<tr ng-repeat="star in starCatalog">
					<td>{{star.name}}</td>
					<td>{{star.constellation}}</td>
					<td>{{star.bd}}</td>
					<td>{{star.distance}}</td>
				</tr>
			</table>
		</div>
	</div>
</div>
</body>
</html>
