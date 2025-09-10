using System;
using System.Text.Json;
using API.RequestHelpers;
using Microsoft.Net.Http.Headers;

namespace API.Extensions;

public static class HttpExtensions
{
    public static void AddPagiationHeader(this HttpResponse response, PagiantionMetadata metadata)
    {
        var options = new JsonSerializerOptions { PropertyNamingPolicy = JsonNamingPolicy.CamelCase };

        response.Headers.Append("Pagination", JsonSerializer.Serialize(metadata, options));
        response.Headers.Append(HeaderNames.AccessControlExposeHeaders, "Pagination");
    }
}
