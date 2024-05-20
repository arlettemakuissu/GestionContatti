package com.example.demo.Clienti_Contatti_Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.demo.Clienti_Contatto_Repository.Clienti_Repository;
import com.example.demo.Clienti_Contatto_Repository.Contatto_Repository;
import com.example.demo.Conttati_Clienti_Entity.Clienti_Entity;
import com.example.demo.Conttati_Clienti_Entity.Contatto_Entity;
import com.example.demo.Gestion_contatti_cleinti_dto.Clienti_dto;
import com.example.demo.Gestion_contatti_cleinti_dto.Contatti_dto;

@Service
public class Clienti_Contatti_Service {
	
	
    @Autowired
	private Clienti_Repository clientiRepository;
    
    @Autowired
    private Contatto_Repository contattiRepository;
    
    
    
    public Clienti_Entity getByEmail(String email) {
    	
    	List <Clienti_Entity> clienti= clientiRepository.findAll();
    	
    	Clienti_Entity newClient=null;
    	for(Clienti_Entity client : clienti) {
    		
    		if(client.getEmail().equals(email)) {
    			newClient= client;
    		}
    	}
    	
    	 return newClient;
    	
    }
	
	
	
	public void addClient( Clienti_dto client) {
		
		Clienti_Entity clienti = new Clienti_Entity();
		
		clienti.setNome(client.getNome());
		clienti.setCognome(client.getCognome());;
		clienti.setEmail(client.getEmail());
		clienti.setTipo(client.getTipo());
		
		clientiRepository.save(clienti);
		
		
		
		
	}
	
	
	public List<Clienti_dto> getClienti(){
		
		List<Clienti_Entity> clienti = clientiRepository.findAll();
		
		List<Clienti_dto> newClienti = new ArrayList<Clienti_dto>();
		
		for(Clienti_Entity client:clienti) {
			Clienti_dto clientdto = new Clienti_dto(client.getId(),client.getNome(),client.getCognome(),client.getEmail(),client.getTipo());
			
			newClienti.add(clientdto);
			
		}
		
		return newClienti;
		
	}
	
    public void addContatto (Contatti_dto contatto) throws Exception  {
		
    	
    	Contatto_Entity contatti= new Contatto_Entity();
    	
    	List<Clienti_Entity> clienti = clientiRepository.findAll();
    	
    	 Clienti_Entity newclient = null;
    	for(Clienti_Entity client : clienti) {
    		
    		
    		if(client.getId().compareTo(contatto.getClientId())==0) {
    			
    			newclient = client;
    			
    		}
    	}
    	
    	if(newclient==null) {
    		
    		throw new Exception("client does not exist");
    		
    	}
    	
    	contatti.setClient(newclient);
    	contatti.setNome(contatto.getNome());
    	contatti.setCognome(contatto.getCognome());
    	contatti.setCat(contatto.getCat());
    	contatti.setTel(contatto.getTel());
    	
    	contattiRepository.save(contatti);
    	
    	System.out.print(contatti);
    	
    	
    	 
	}
	
   public List<Contatti_dto> getConttati(Long idclient){
		
		List<Contatto_Entity> contatti = contattiRepository.findAll();
		
       List<Contatti_dto> newContatto = new ArrayList<Contatti_dto>();
		
		for(Contatto_Entity contatto:contatti) {
			
			if(contatto.getClient().getId().equals(idclient)) {
			Contatti_dto conattatodto = new Contatti_dto(contatto.getId(),contatto.getNome(),contatto.getCognome(),contatto.getCat(),contatto.getTel());
			
			newContatto.add(conattatodto);
			}
		}
		System.out.println(newContatto);
		
		return newContatto;
		
	}
	
	
   public  Contatto_Entity UpdateContatto(Long id,Contatti_dto contatto) {
	   
	   List<Contatto_Entity> contatti = contattiRepository.findAll();
	     Contatto_Entity newcontatto=null;
	   for(Contatto_Entity getcontatto: contatti) {
		   
		   if(getcontatto.getId().compareTo(id)==0) {
			   
			   newcontatto=  getcontatto;
		   }
	   }
	   
	    newcontatto.setCat(contatto.getCat());
	    newcontatto.setNome(contatto.getNome());
	    newcontatto.setCognome(contatto.getCognome());
	    newcontatto.setTel(contatto.getTel());
	    
	    
	   
	    return contattiRepository.save(newcontatto) ;
   }
	public Contatto_Entity getContattoById(Long id) {
		
		List <Contatto_Entity> contatti = contattiRepository.findAll();
		
		Contatto_Entity contatto=null;
		
		for(Contatto_Entity newcontact: contatti) {
			
			if(newcontact.getId().equals(id));
			contatto= newcontact;
		}
		
		return contatto;
	}
	
  public void deleteById(Long id) {
	  
	 List <Contatto_Entity> contatti = contattiRepository.findAll();
	 
	 for(Contatto_Entity contatto : contatti) {
		 
		 if(contatto.getId().equals(id)) {
			 contattiRepository.delete(contatto);
		 }
	 }
	  
  }
}
