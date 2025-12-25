# Smerio DevOps Manual

This guide explains how to deploy the **Smerio** application (formerly finapp) using the universal deployment script.

## Directory Structure
## Directory Structure
- `Install/`: Contains deployment scripts (`deploy.sh`, `setup_remote.sh`) and configuration.
  - `.env`: Deployment configuration (VPS IPs, Registry, etc).
  - `demo.db`: Database snapshot for Demo mode.

## Step 1: Configuration

1.  **Configure Installer**:
    Copy `Install/.env.template` to `Install/.env` and fill in your details:
    ```bash
    cp Install/.env.template Install/.env
    nano Install/.env
    ```
    *Required for Remote*: `VPS_IP`, `HOST`, `USER_EMAIL`, etc.

2.  **Export Local Database (For Demo Mode)**:
    If deploying a Demo instance with pre-seeded data, export your local DB:
    ```bash
    mkdir -p Install
    docker cp smerio-pocketbase-1:/pocketbase/data/data.db Install/demo.db
    # Note: Use your actual running container name if different.
    ```

## Step 2: Deployment

Run the universal script:

```bash
./Install/deploy.sh
```

### Options:
1.  **Target**:
    - **Local**: Builds and runs the app locally using Docker Compose.
    - **Remote (VPS)**: Connects to the VPS configured in `Install/.env`, uploads scripts, and triggers deployment.
    
2.  **Mode**:
    - **Production**: Standard deployment.
    - **Demo**: activates Demo Mode (data reset every 60m).
    - **Debug**: Enables Flask Debug mode.

## Remote Behavior
- The script checks `Install/.env` for Registry credentials.
- It pulls the Docker image (default `smerio/smerio:latest` or custom).
- It configures Nginx (`smerio` site) and SSL (Certbot).
- **Dark Admin**: Direct access to `/_/` is blocked.
