from django.shortcuts import render
from django.core.mail import EmailMultiAlternatives, send_mail
from django.template.loader import get_template
from django.shortcuts import render
import socket
from user_agents import parse

from django.core import mail

# Create your views here.
def history(request):
    # Пользователь использует мобильное устройство?
    print("МОБИЛЬНИК ИЛИ НЕТ", request.user_agent.is_mobile)
    # Определяем производителя устройства
    print("ПРОИЗВОДИТЕЛЬ", request.user_agent.device.family)
    # ОС пользователя
    print("OS", request.user_agent.os)
    # Версия операционной системы
    print("OS VERSION", request.user_agent.os.version)
    if (request.user_agent.is_mobile == True):
        return render(request, 'history/history-mobile.html')
    else:
        return render(request, 'history/history.html')

