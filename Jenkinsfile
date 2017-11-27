pipeline {
  agent any
  stages {
    stage('Build Image') {
      steps {
        withCredentials(bindings: [usernamePassword(credentialsId: 'KUBE_URL', Secret: 'KUBE_URL')]) {
          sh 'echo $KUBE_URL'
        }
        
      }
    }
  }
  environment {
    KUBE_URL = 'credentials(\'KUBE_URL\')'
  }
}