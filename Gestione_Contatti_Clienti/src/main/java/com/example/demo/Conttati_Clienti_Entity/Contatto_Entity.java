package com.example.demo.Conttati_Clienti_Entity;



import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Contatto_Entity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	 @ManyToOne
	    @JoinColumn(name="Client_id", nullable=false)
		private Clienti_Entity client;
	
	private String nome;
	private String cognome;
	private String tel;
    private String cat;
	

}
