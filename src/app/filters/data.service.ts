import { Injectable } from '@angular/core';
import { Country } from './country';
import { Region } from './region';
import { Area } from './area';
import { Predivision } from './predivision';
import { DealerGroup } from './dealergroup';
import { Dealer } from './dealer';
import { Outlet } from './outlet';
import { Brand } from './brand';
import { Model } from './model';
import { Engine } from './engine';
import { EquipmentLevel } from './equipmentlevel';
import { Multimedia } from './multimedia';

@Injectable()
export class DataService {

  getCountries() {
    return [
     new Country(1, 'USA' ),
     new Country(2, 'India' ),
     new Country(3, 'France' ),
	 new Country(4, 'Tunisia' )
    ];
  }
  
   getRegions() {
   return [
     new Region(1, 1, 'Arizona' ),
     new Region(2, 1, 'Alaska' ),
     new Region(3, 1, 'Florida'),
     new Region(4, 1, 'Hawaii'),
     new Region(5, 2, 'Gujarat' ),
     new Region(6, 2, 'Goa'),
     new Region(7, 2, 'Punjab' ),
	 new Region(8, 3, 'Paris' ),
	 new Region(9, 3, 'Nanterre' ),
	 new Region(10, 4, 'Tunis' ),
     new Region(11, 4, 'Sousse' ),
     new Region(12, 4, 'Bizerte')
    ];
  }
  
  getAreas() {
    return [
     new Area(1, 3, 8, '15e' ),
	 new Area(2, 3, 8, '17e' ),
	 new Area(3, 3, 9, 'NanterrePrefecture' ),
	 new Area(4, 4, 10, 'Carthage' ),
	 new Area(5, 4, 10, 'Marsa' ),
	 new Area(6, 1, 1, 'NewYork' ),
	 new Area(7, 2, 5, 'NewDelhi' )
    ];
  }
  
  getPredivisions() {
    return [
     new Predivision(1, 'Predivision 1' ),
	 new Predivision(2, 'Predivision 2' ),
	 new Predivision(3, 'Predivision 3' )
    ];
  }
  
  getDealerGroups() {
   return [
     new DealerGroup(1, 1, 'DealerGroup 1' ),
     new DealerGroup(2, 1, 'DealerGroup 2' )
    ];
  }
  
  getDealers() {
    return [
     new Dealer(1, 1, 1, 'Dealer 1' ),
	 new Dealer(2, 1, 2, 'Dealer 2' )
    ];
  }
  
  getOutlets() {
    return [
     new Outlet(1, 1, 1, 1, 'Outlet 1' ),
	 new Outlet(2, 1, 2, 2, 'Outlet 2' )
    ];
  }
  
  getBrands() {
    return [
     new Brand(1, 'Brand 1' ),
     new Brand(2, 'Brand 2' )
    ];
  }
  
  getModels() {
   return [
     new Model(1, 1, 'Model 1' ),
     new Model(2, 1, 'Model 2' )
    ];
  }
  
  getEngines() {
    return [
     new Engine(1, 1, 1, 'Engine 1' ),
	 new Engine(2, 1, 2, 'Engine 2' )
    ];
  }
  
  getEquipmentLevels() {
    return [
     new EquipmentLevel(1, 1, 1, 1, 'EquipmentLevel 1' ),
     new EquipmentLevel(2, 1, 2, 2, 'EquipmentLevel 2' )
    ];
  }
  
  getMultimedias() {
    return [
     new Multimedia(1, 1, 1, 1, 1, 'Multimedia 1' ),
     new Multimedia(2, 1, 2, 2, 2, 'Multimedia 2' )
    ];
  }

  constructor() { }

}
