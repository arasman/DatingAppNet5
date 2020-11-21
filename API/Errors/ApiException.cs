namespace API.Errors
{
    public class ApiException
    {
        public ApiException(int satasCode, string message = null, string details = null)
        {
            SatasCode = satasCode;
            Message = message;
            Details = details;
        }

        public int SatasCode { get; set; }
        public string Message { get; set; }
        public string Details { get; set; }
    }
}