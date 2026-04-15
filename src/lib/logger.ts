/**
 * Logger utility for consistent logging across the application.
 * In development, logs to console. In production, can be configured to send to external services.
 */

type LogLevel = 'error' | 'warn' | 'info' | 'debug';

interface LogEntry {
  level: LogLevel;
  message: string;
  error?: any;
  timestamp: string;
}

class Logger {
  private isDevelopment = process.env.NODE_ENV === 'development';

  private formatMessage(level: LogLevel, message: string, error?: any): string {
    const timestamp = new Date().toISOString();
    const prefix = `[${timestamp}] [${level.toUpperCase()}]`;
    return error ? `${prefix} ${message}` : `${prefix} ${message}`;
  }

  error(message: string, error?: any) {
    const formattedMessage = this.formatMessage('error', message, error);

    if (this.isDevelopment) {
      console.error(formattedMessage, error);
    } else {
      // In production, you could send to error tracking service like Sentry
      // Example: Sentry.captureException(error, { extra: { message } });
    }
  }

  warn(message: string) {
    const formattedMessage = this.formatMessage('warn', message);

    if (this.isDevelopment) {
      console.warn(formattedMessage);
    }
  }

  info(message: string) {
    const formattedMessage = this.formatMessage('info', message);

    if (this.isDevelopment) {
      console.info(formattedMessage);
    }
  }

  debug(message: string) {
    const formattedMessage = this.formatMessage('debug', message);

    if (this.isDevelopment) {
      console.debug(formattedMessage);
    }
  }
}

export const logger = new Logger();