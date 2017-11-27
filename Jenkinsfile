pipeline {
  agent any
  stages {
    stage('Build Image') {
      steps {
      withCredentials([usernamePassword(credentialsId: 'KUBE_URL', Secret: 'KUBE_URL')]) {
        sh "echo $KUBE_URL"
      }
      }
    }
    stage('Publish Image') {
      steps {
        sh 'docker '
      }
    }
    stage('Deploy') {
      steps {
        sh 'curl'
      }
    }
  }
}
