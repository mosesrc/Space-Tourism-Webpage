namespace SpaceTourismWebSite.Model
{
    public class Planet
    {

        public class Rootobject
        {
            public Destination[] destinations { get; set; }
        }

        public class Destination
        {
            public string name { get; set; }
            public Images images { get; set; }
            public string description { get; set; }
            public string distance { get; set; }
            public string travel { get; set; }
        }

        public class Images
        {
            public string png { get; set; }
            public string webp { get; set; }
        }

    }
}
