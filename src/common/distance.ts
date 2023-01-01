import { Injectable } from "@nestjs/common";
import { Driver } from "@prisma/client";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class Distance{

    constructor(private prisma: PrismaService){}
    
    async getAllAvailableDriversNearby(location: string, counter?: number){
        const radio = 3;
        let nearbyDrivers: Driver[] = [];         

        const latitudP = parseFloat(location.split(',')[0]);
        const longitudP = parseFloat(location.split(',')[1]);
        
        const driversLocations = (await this.prisma.driver.findMany())
                                            .filter(x => x.Avaliable == true)
                                            .map(x => x.Location);

        for(let i=0; i<driversLocations.length; i++){
            const latitudC = parseFloat(driversLocations[i].split(',')[0]);
            const longitudC = parseFloat(driversLocations[i].split(',')[1]); 
            const distance = this.calculateKms(latitudP, longitudP, latitudC, longitudC);

            const conductor = await this.prisma.driver.findFirst({
                    where: {
                        Location: driversLocations[i],
                    }
                }
            )

            if (distance <= radio){
                if (conductor)
                    nearbyDrivers.push(conductor);
            }

            if (nearbyDrivers.length >= counter) break;
        }

        return nearbyDrivers.sort((a, b) => (a.Id - b.Id));
    }
    
    calculateKms(lat1: number, lng1: number, lat2: number, lng2: number) {
        const earthRadius: number = 6371; //KMts
    
        const distanceLatitude: number = this.toRadians(lat2-lat1);
        const distanceLongitude: number = this.toRadians(lng2-lng1);
    
        const sinDistanceLatitude: number = Math.sin(distanceLatitude / 2);
        const senoDistanciaLongitud: number = Math.sin(distanceLongitude / 2);
    
        const a: number = Math.pow(sinDistanceLatitude, 2) + Math.pow(senoDistanciaLongitud, 2)
            * Math.cos(this.toRadians(lat1)) * Math.cos(this.toRadians(lat2));
    
        const c: number = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    
        const distance: number = earthRadius * c; //distance in kilometres
        console.log(distance);
        return distance;
    }

    toRadians(number: number){
        return (number * Math.PI) / 180.0;
    }
}