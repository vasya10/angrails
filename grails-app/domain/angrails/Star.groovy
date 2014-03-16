package angrails

import grails.rest.Resource

@Resource(uri='/starCatalog', formats=['json', 'xml'])
class Star {

	String name
	String constellation
	String bd
	Integer distance

	static constraints = {
	}
}
