using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace serverside.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    //To Enable CORS for this controller
    [EnableCors()]
    public class PopularController : ControllerBase
    {
        //For Dependancy Injection
        private IHttpClientFactory _httpClientFactory;

        //To Inject the depencancy use a constructor

        public PopularController(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }

        //Sends a get request to TMDB via the API and returns a JSON list of Popular movies 
        [HttpGet]
        public async Task<ActionResult> Get()
        {
            var API_KEY = "api_key=1b38cdbb95814a2070c1afc36ae8258c";
            var client = _httpClientFactory.CreateClient();
            var result = await client.GetStringAsync("https://api.themoviedb.org/3/movie/popular?" + API_KEY + "&language=en-US&page=1");
            return Ok(result);
        }
    }
}