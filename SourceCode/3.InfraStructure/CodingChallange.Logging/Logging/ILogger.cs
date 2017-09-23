using System;

namespace CodingChallange.InfraStructure.Logging
{
    public interface ILogger
    {
        void Log(string message);
        void Log(Exception ex);
    }
}
