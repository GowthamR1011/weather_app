import WeatherCard from "@/components/weather_card/weather_card";

export default function Home() {
  const LocationList:string[] =[];
  
  

  return (
   <div>
      <div className="Current Location Content">
        <div>
          <h5>Current Location</h5>
        </div>
        <WeatherCard location="None"/>
      </div>
      <div className="Saved Location List">
        {
          LocationList.length != 0?
            <div>
              <h5>Saved Locations</h5>
            </div>:
            <div>
            </div>
        }

        <div>
          {LocationList.map((locationValue:string) => {
            return(
              <WeatherCard location={locationValue} />
            )
            })
          }
        </div>
      </div>
    
   </div>
  );
}
