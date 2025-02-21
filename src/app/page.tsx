import WeatherCard from "@/components/WeatherCard/WeatherCard";

export default function Home() {
  const LocationList:string[] =["Manchester","Chennai","Los Angeles","Austin"];
  
  

  return (
   <div>
      <div className="Current Location Content">
        
        <WeatherCard location="Current Location"/>
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
            return(<div key={locationValue}>
              <WeatherCard location={locationValue} />
              </div>
            )
            })
          }
        </div>
      </div>
    
   </div>
  );
}
