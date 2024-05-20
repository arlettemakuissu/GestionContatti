package com.example.demo.Contatti_Clienti_Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Clienti_Contatti_Service.Clienti_Contatti_Service;
import com.example.demo.Conttati_Clienti_Entity.Clienti_Entity;
import com.example.demo.Conttati_Clienti_Entity.Contatto_Entity;
import com.example.demo.Gestion_contatti_cleinti_dto.Clienti_dto;
import com.example.demo.Gestion_contatti_cleinti_dto.Contatti_dto;
import com.example.demo.Gestion_contatti_cleinti_dto.Login_dto;

@RestController
public class Contatto_Clienti_Controller {
	@Autowired
	private Clienti_Contatti_Service service;
	
	
	@PostMapping("login")
	public Login_dto Login( @RequestBody Clienti_dto credential) {
		
		System.out.println(credential);
	 Clienti_Entity client= 	service.getByEmail(credential.getEmail());
	 System.out.println(client);
		
	 if(client == null) {
			return null;
		}
	 
	 return new  Login_dto(client.getId(),  client.getNome(),client.getCognome(),client.getEmail(),client.getTipo());
		
	}
	
	
	
	@PostMapping("addclient")
	public  void addClient( @RequestBody  Clienti_dto client) {
		
		 service.addClient(client);
	}
	
	@GetMapping("getclient")
	public List<Clienti_dto>getClienti(){
		
		return service.getClienti();
		
	}
	@PostMapping("addcontatto")
	public void addContatto( @RequestBody Contatti_dto contatto) throws Exception  {
		
		System.out.println(contatto);
		 service.addContatto(contatto);
		
	}
	
	@GetMapping("getcontatto/{idclient}")
	public List<Contatti_dto>getContatto(@PathVariable Long idclient){
		
		return service.getConttati(idclient);
		
	}
	
	@PutMapping("update/{id}")
	public  Contatto_Entity UpdateContatto(@PathVariable Long id,@RequestBody Contatti_dto contatto) {
		
	 return	service.UpdateContatto(id, contatto);
		
	}
	@GetMapping("contatti/{id}")
	public Contatto_Entity getContattoByid(@PathVariable Long id) {
		
		return service.getContattoById(id);
		
	}
	
	@DeleteMapping("deletecontatto/{id}")
	  public void deleteById(@PathVariable  Long id) {
		  
		  service.deleteById(id);
		  
	  }

}
