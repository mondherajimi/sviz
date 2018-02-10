import { Component } from '@angular/core';
import { DataService } from './data.service';
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

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
  providers: [DataService]
})
export class FiltersComponent {

  selectedCountry:Country = new Country(3, 'France');
  // selectedRegion:Region = new Region(8, 3, 'Paris');
  // selectedArea:Area = new Area(1, 3, 8, '15e');
  countries: Country[];
  regions: Region[];
  areas: Area[];
  predivisions: Predivision[];
  dealergroups: DealerGroup[];
  dealers: Dealer[];
  outlets: Outlet[];
  brands: Brand[];
  models: Model[];
  engines: Engine[];
  equipmentLevels: EquipmentLevel[];
  multimedias: Multimedia[];
  
  constructor(private _dataService: DataService) {
    this.countries = this._dataService.getCountries();
    this.predivisions = this._dataService.getPredivisions();
    this.brands = this._dataService.getBrands();	
	// this.regions = this._dataService.getRegions().filter((item)=> item.countryid == 3);
	// this.areas = this._dataService.getAreas().filter((item)=> item.regionid == 8);
  }
  
  onSelectCountry(countryid) {
    this.areas = [];
    this.regions = this._dataService.getRegions().filter((item)=> item.countryid == countryid);
  }
  
  onSelectRegion(regionid) {
	this.areas = this._dataService.getAreas().filter((item)=> item.regionid == regionid);
  }
  
  onSelectPredivision(predivisionid) {
	this.dealers = [];
	this.outlets = [];
	this.dealergroups = this._dataService.getDealerGroups().filter((item)=> item.predivisionid == predivisionid);
  }
  
  onSelectDealerGroup(dealergroupid) {
	this.dealers = this._dataService.getDealers().filter((item)=> item.dealergroupid == dealergroupid);
  }
  
  onSelectDealer(dealerid) {
	this.outlets = this._dataService.getOutlets().filter((item)=> item.dealerid == dealerid);
  }
  
  onSelectBrand(brandid) {
    this.engines = [];
	this.equipmentLevels = [];
	this.multimedias = [];
    this.models = this._dataService.getModels().filter((item)=> item.brandid == brandid);
  }
  
  onSelectModel(modelid) {
	this.engines = this._dataService.getEngines().filter((item)=> item.modelid == modelid);
  }
  
  onSelectEngine(engineid) {
	this.equipmentLevels = this._dataService.getEquipmentLevels().filter((item)=> item.engineid == engineid);
  }
  
  onSelectEquipmentLevel(equipmentlevelid) {
	this.multimedias = this._dataService.getMultimedias().filter((item)=> item.equipmentlevelid == equipmentlevelid);
  }

  ngOnInit() {
	  
  }
}
