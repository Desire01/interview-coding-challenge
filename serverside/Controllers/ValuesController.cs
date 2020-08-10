using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace serverside.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors()]
    public class ValuesController : ControllerBase
    {
        private IHttpClientFactory _httpClientFactory;
        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return new string[] { "value1", "value2" };
        }

        public ValuesController(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }
        // GET api/values/5
        [HttpGet("{text}")]
        public async Task<ActionResult<string>> GetAsync(string text)
        {

            var client = _httpClientFactory.CreateClient();
            var result = await client.GetStringAsync("https://api.themoviedb.org/3/search/movie?api_key=1b38cdbb95814a2070c1afc36ae8258c&language=en-US&query= '"+text+"'");
            return Ok(result);
            // return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
