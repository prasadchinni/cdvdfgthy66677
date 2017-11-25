pipeline {
  agent any
  stages {
    stage('Test Docker') {
      agent any
      steps {
        dockerShell(shellScript: 'docker -v')
      }
    }
  }
}