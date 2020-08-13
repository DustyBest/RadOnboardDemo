import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  preferenceOptions = {
    brewPreferences:["light", "amber", "dark", "pisners", "stouts", "sours", "kombucha", "lagers", 
      "porters", "ipa", "blondes", "belgian"],
    winePreferences:["red", "white", "sparkling", "riesling", "pinot gris", "chardonnay", "pinot noir", "zinfandel", "cabernet" ],
    foodPreferences:["american", "thai", "soul", "japanese", "cuban", "greek", "chinese", 
      "mediterranean", "italian", "pizza", "french", "german", "gourmet", "pub grub", "BBQ", "indian", "african", "mexican", "seafood"],
    occasionPreferences:["tasting rooms", "arcade", "darts", "ping pong", "theme bar", "games", 
      "comedy night", "trivia night", "game night", "sports", "dancing", "pool", "paint night", 
      "jenga", "dive bar", "live band", "rooftop bar", "wine bar", "karaoke", "juke box"]
  }

  constructor() { }
}
