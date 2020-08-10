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

    //Apply CORS to the search controller
    [EnableCors()]
    public class SearchController : ControllerBase
    {
        //For Dependancy Injection
        private IHttpClientFactory _httpClientFactory;

        //To Inject the depencancy use a constructor
        public SearchController(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }

        //Sends a get request to TMDB via the API and returns a JSON list of searched movies via the searchTerm passed from the frontend
        [HttpGet("{text}")]
        public async Task<ActionResult<string>> GetAsync(string text)
        {

            var client = _httpClientFactory.CreateClient();
            var result = await client.GetStringAsync("https://api.themoviedb.org/3/search/movie?api_key=1b38cdbb95814a2070c1afc36ae8258c&language=en-US&query= '" + text + "'");
            return Ok(result);
            
        }

    }
}