# 🌊 MyVolumeEnglish - Java Installation Guide

## ⚠️ Important: Java is Not Installed

Your computer doesn't have Java installed yet. This guide will help you install it.

---

## 📥 Step 1: Download Java

### Option A: Oracle Java (Official)

1. Visit: **https://www.oracle.com/java/technologies/downloads/**
2. Click **"Download"** next to **Java 21** (or Java 11 LTS if you prefer stability)
3. Choose your operating system:
   - **Windows**: Download the `.exe` file
   - **Mac**: Download the `.dmg` file (Intel or Apple Silicon)
   - **Linux**: Follow the Linux instructions on the page

### Option B: OpenJDK (Free, Open Source - Recommended)

**For Windows:**
1. Visit: https://adoptium.net/
2. Download **Temurin 21 LTS** (Windows x64 .msi)
3. Save to Downloads folder

**For Mac:**
1. Visit: https://adoptium.net/
2. Download **Temurin 21 LTS** (macOS .pkg)
3. Or use Homebrew: `brew install temurin`

**For Linux:**
```bash
# Ubuntu/Debian
sudo apt update
sudo apt install openjdk-21-jdk

# CentOS/RHEL
sudo yum install java-21-openjdk-devel

# Fedora
sudo dnf install java-21-openjdk-devel
```

---

## 🔧 Step 2: Install Java

### Windows Installation

1. **Locate the downloaded file** - Check your Downloads folder
2. **Double-click** the `.exe` file
3. **Click "Install"** (you may need admin permission)
4. **Choose installation location** - Default is fine
5. **Click "Next"** through the setup wizard
6. **Click "Finish"** when complete
7. **Restart your computer** ⭐ (Important!)

### Mac Installation

**Using .dmg file:**
1. **Double-click** the `.dmg` file
2. **Drag** the Java icon to the Applications folder
3. **Wait for installation** to complete
4. **Eject** the .dmg file

**Using Homebrew (easiest):**
```bash
brew install temurin
```

### Linux Installation

Already covered above with package manager commands.

---

## ✅ Step 3: Verify Installation

After installation and **restarting your computer**, verify Java is installed:

### Windows (Command Prompt or PowerShell):
```powershell
java -version
```

### Mac/Linux (Terminal):
```bash
java -version
```

**Expected Output:**
```
java version "21" 2023-09-19
Java(TM) SE Runtime Environment
```

✅ If you see version info, Java is correctly installed!
❌ If you see "command not found", restart your computer and try again.

---

## 📍 Step 4: Set Up PATH (If Needed)

If Java still isn't recognized after restart, you may need to add it to your PATH.

### Windows - Add Java to PATH

1. **Right-click** on "This PC" or "My Computer"
2. Click **"Properties"**
3. Click **"Advanced system settings"**
4. Click **"Environment Variables"** button
5. Under **"System variables"**, click **"New"**
6. **Variable name:** `JAVA_HOME`
7. **Variable value:** `C:\Program Files\Java\jdk-21` (adjust version number)
8. Click **"OK"** multiple times
9. **Restart your computer**

### Mac/Linux - Add Java to PATH

Edit your shell config file:

**For bash (`.bashrc` or `.bash_profile`):**
```bash
export JAVA_HOME=$(/usr/libexec/java_home)
export PATH=$JAVA_HOME/bin:$PATH
```

**For zsh (`.zshrc`):**
```bash
export JAVA_HOME=$(/usr/libexec/java_home)
export PATH=$JAVA_HOME/bin:$PATH
```

Then reload:
```bash
source ~/.zshrc  # or ~/.bashrc
```

---

## 🚀 Step 5: Run MyVolumeEnglish with Java

Once Java is installed, go back to the MyVolumeEnglish folder and:

### Windows Users:
**Double-click** `run-server.bat` or run:
```powershell
.\run-server.ps1
```

### Mac/Linux Users:
Run:
```bash
bash run-server.sh
```

Or manually:
```bash
javac JavaServer.java
java JavaServer
```

---

## 🌐 Step 6: Access Your Website

Once the server starts, you should see:
```
🚀 Starting server on port 8080...
```

**Open your browser** and visit:
```
http://localhost:8080
```

---

## ❓ FAQ

### Q: Which Java version should I download?
**A:** 
- **Beginners**: Download Java 21 (latest, stable)
- **Stability**: Download Java 21 LTS (Long Term Support)
- **Both work fine** for MyVolumeEnglish

### Q: Do I need JDK or JRE?
**A:**
- **JRE** (Java Runtime Environment) - Just runs Java programs ✅
- **JDK** (Java Development Kit) - Includes compiler (javac) ✅ Better choice
- We recommend **JDK** since we need to compile `JavaServer.java`

### Q: Why do I need to restart my computer?
**A:** Windows needs to refresh environment variables. Restarting is the surest way.

### Q: Can I use an older Java version?
**A:** Yes! Java 8 and later all work. However, newer versions are more secure.

### Q: Do I need to install Java if I use Python/Node.js instead?
**A:** No! You only need Java for the Java server method. You can also use:
- Python: `python -m http.server 8000`
- Node.js: `npx http-server`

---

## 🆘 Troubleshooting

### Problem: "javac: command not found"
**Solution:**
1. Make sure you installed the **JDK** (not just JRE)
2. Restart your computer
3. Check PATH settings (see Step 4 above)

### Problem: "Java is not recognized"
**Solution:**
1. Restart Command Prompt/PowerShell/Terminal
2. If still doesn't work, restart your computer
3. Add to PATH (see Step 4)

### Problem: Installation says "Access Denied"
**Solution:**
1. Right-click the installer
2. Select "Run as Administrator"
3. Click "Yes" when prompted

### Problem: On Mac, file won't open
**Solution:**
1. Right-click the `.dmg` file
2. Select "Open"
3. If still blocked, go to System Preferences > Security & Privacy
4. Click "Open Anyway"

### Problem: Different Java versions installed
**Solution:**
- On Mac/Linux, you can check: `java -version`
- To use a specific version, set `JAVA_HOME` to that version's path
- Or uninstall older versions you don't need

---

## 📚 Additional Resources

### Official Documentation
- [Oracle Java Downloads](https://www.oracle.com/java/technologies/downloads/)
- [Adoptium OpenJDK](https://adoptium.net/)
- [Java Version Releases](https://www.oracle.com/java/technologies/java-se-support-roadmap.html)

### Quick Setup Links
- **Windows**: https://www.oracle.com/java/technologies/downloads/#windows
- **Mac**: https://www.oracle.com/java/technologies/downloads/#macos
- **Linux**: https://www.oracle.com/java/technologies/downloads/#linux

---

## ✨ Next Steps

Once Java is installed and working:

1. ✅ Java installed and verified
2. ✅ Run the server with: `java JavaServer`
3. ✅ Open: http://localhost:8080
4. ✅ Start learning English! 🌊

---

## 💬 Still Having Issues?

1. **Check Java Installation**: Run `java -version` in terminal
2. **Verify Compiler**: Run `javac -version` in terminal
3. **Check Port**: Make sure port 8080 is not in use
4. **Restart Computer**: Often solves PATH issues
5. **Try Different Browser**: Chrome, Firefox, Safari, Edge all work

---

*Created: June 5, 2026*  
*Platform Support: Windows, Mac, Linux*  
*Java Version: 8 or higher*
