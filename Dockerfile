FROM debian:latest

# Update and install necessary packages in a single RUN command
RUN apt-get update && \
    apt-get install -y \
    openssh-server \
    curl \
    nano \
    && rm -rf /var/lib/apt/lists/*

# Install Node.js (use NodeSource to ensure you get a recent version)
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash - && \
    apt-get install -y nodejs && \
    rm -rf /var/lib/apt/lists/*

# Create necessary directories
RUN mkdir /devdir

# Set root password
RUN echo 'root:rasul' | chpasswd

# Enable root login for SSH
RUN sed -i 's/#PermitRootLogin prohibit-password/PermitRootLogin yes/' /etc/ssh/sshd_config

# Create the missing /run/sshd directory
RUN mkdir -p /run/sshd

# Set the working directory inside the container
WORKDIR /app

# Copy all files and folders from the current directory to the working directory inside the container
COPY . .

# Install Node.js dependencies
RUN npm install

# Expose the ports
EXPOSE 22 5000

# Run the SSH daemon and the Node.js application
CMD bash -c "/usr/sbin/sshd -D & npm run dev"
