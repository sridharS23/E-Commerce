using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class BuggyController : BaseApiController
{
    [HttpGet("not-found")]

    public IActionResult GetNotFound()
    {
        return NotFound();
    }

    [HttpGet("Bad-Request")]

    public IActionResult GetBadRequest()
    {
        return BadRequest("This is not a good request");
    }

    [HttpGet("Unauthorized")]

    public IActionResult GetUnauthorized()
    {
        return Unauthorized();
    }

    [HttpGet("Validation-Error")]

    public IActionResult GetValidationError()
    {
        ModelState.AddModelError("Problem1", "This is the first error");
        ModelState.AddModelError("Problem2", "This is the second error");
        return ValidationProblem();
    }

    [HttpGet("Server-Error")]
    public IActionResult GetServerError()
    {
        throw new Exception("This is a server error");
    }

}   
