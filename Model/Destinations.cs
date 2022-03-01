using Newtonsoft.Json;

namespace SpaceTourismWebSite.Model

{
    public class Destinations
    {
        public string DestinationData { get; set; } = @"C:\Users\rynmo\OneDrive\Desktop\MSSA\UnitedTraining\Project3\SpaceTourismWebSite\Data\destinations.json";
        public Destinations()
        {

        }

        private void deserialiseJson(string strJSON)
        {
            try
            {
                var jDestination = JsonConvert.DeserializeObject<dynamic>(strJSON);

                Console.WriteLine("Here's our JSON object" + jDestination.ToString);
            }
            catch (Exception ex)
            {

               Console.WriteLine("There is a problem" + ex.Message);
            }
        }


    }
}
