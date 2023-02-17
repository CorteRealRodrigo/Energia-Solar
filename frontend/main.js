import 'core-js/stable';
import 'regenerator-runtime/runtime';
import './assets/css/style.css';
import Chart from 'chart.js/auto'

window.onload = function() {
    $('#txtBuscaResidencial').click(() => {
        verificaRadioSelect();
    })
    $('#txtBuscaResidencial').keyup((c, d) => {
        const radio = $('input[name="theradio"]:checked').attr('id');
        
        verificaRadioSelect();
        if(radio === 'radio1') {
            c = 0.7;
        }
        if(radio === 'radio2') {
            c = 0.5;
        }

        const tipoEnergia = $('.tipoRede').val();
        if(tipoEnergia == 1) {
            function* cores(){ 
                yield '17.25';  
                yield '18.11';  
                yield '19.02';  
                yield '19.97';  
                yield '20.97';  
                yield '22.02';  
                yield '23.12';
                yield '24.27';
            }
            d = cores();
        }
        if(tipoEnergia == 2) {
            function* cores(){ 
                yield '28.75';
                yield '30.19';
                yield '31.70';
                yield '33.28';
                yield '34.95';
                yield '36.69';
                yield '38.53';
                yield '40.45';
            }
            d = cores();
        }
        if(tipoEnergia == 3) {
            function* cores(){ 
                yield '57.50';
                yield '60.38';
                yield '63.39';
                yield '66.56';
                yield '69.89';
                yield '73.39';
                yield '77.06';
                yield '80.91';
            }
            d = cores();
        }


        

        
        calculoPorLinhaFatura(0.575, 45);
        calculoPorLinhaFatura(0.604, 52);
        calculoPorLinhaFatura(0.634, 59);
        calculoPorLinhaFatura(0.666, 66);
        calculoPorLinhaFatura(0.699, 73);
        calculoPorLinhaFatura(0.734, 80);
        calculoPorLinhaFatura(0.771, 87);
        calculoPorLinhaFatura(0.809, 94);
    
        calculoPorLinhaEnergia(0.018, 46, c, d);
        calculoPorLinhaEnergia(0.037, 53, c, d);
        calculoPorLinhaEnergia(0.059, 60, c, d);
        calculoPorLinhaEnergia(0.082, 67, c, d);
        calculoPorLinhaEnergia(0.108, 74, c, d);
        calculoPorLinhaEnergia(0.136, 81, c, d);
        calculoPorLinhaEnergia(0.146, 88, c, d);
        calculoPorLinhaEnergia(0.153, 95, c, d);

        
        
        
        calculaLinhaMensal(45, 46, 47);
        calculaLinhaMensal(52, 53, 54);
        calculaLinhaMensal(59, 60, 61);
        calculaLinhaMensal(66, 67, 68);
        calculaLinhaMensal(73, 74, 75);
        calculaLinhaMensal(80, 81, 82);
        calculaLinhaMensal(87, 88, 89);
        calculaLinhaMensal(94, 95, 96);
        
        calculaLinhaMensalPor(47, 45, 48);
        calculaLinhaMensalPor(54, 52, 55);
        calculaLinhaMensalPor(61, 59, 62);
        calculaLinhaMensalPor(68, 66, 69);
        calculaLinhaMensalPor(75, 73, 76);
        calculaLinhaMensalPor(82, 80, 83);
        calculaLinhaMensalPor(89, 87, 90);
        calculaLinhaMensalPor(96, 94, 97);
        
        calculaLinhaAnual(47, 49);
        calculaLinhaAnual(54, 56);
        calculaLinhaAnual(61, 63);
        calculaLinhaAnual(68, 70);
        calculaLinhaAnual(75, 77);
        calculaLinhaAnual(82, 84);
        calculaLinhaAnual(89, 91);
        calculaLinhaAnual(96, 98); 

        const date = new Date().getFullYear();
        if(date === 2023) insereDestaque(49, 48);
        if(date === 2024) insereDestaque(56, 55);
        if(date === 2025) insereDestaque(63, 62);
        if(date === 2026) insereDestaque(70, 69);
        if(date === 2027) insereDestaque(77, 76);
        if(date === 2028) insereDestaque(84, 83);
        if(date === 2029) insereDestaque(91, 90);
        if(date === 2030) insereDestaque(98, 97);

        const valorBusca = $('#txtBuscaResidencial').val();
        if(valorBusca.length > 2) {
            $('.economia').addClass('ativar');

        } else{
            $('.economia').removeClass('ativar');
        }
        
    });

    const btn = document.getElementById('button');
    const msgAlerta = $('.preencha');
    
    document.getElementById('form').addEventListener('submit', function(event) {
        event.preventDefault();
        btn.value = 'Enviando...';
        const serviceID = 'default_service';
        const templateID = 'template_juq5waw';
        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Dados Enviados';
                msgAlerta.text('Dados enviados com sucesso, logo um representante entrará em contato com você.').css('color', 'green');
                $('.nome').val('');
                $('.email').val('');
                $('.telefoneMascara').val('');
            }, (err) => {
                btn.value = 'Enviar';
                alert(JSON.stringify(err));
            });
    });
    
    $('.build').click(() => {
        if(!$('#txtBuscaResidencial').val()){
            $('html, body').animate({ scrollTop: 10 }, 50);
            const alerta = $('.alerta').text('Informe seu consumo.');
            alerta.addClass('ativar');
            return;
        }
        const lucro23 = pegaLinha(49);
        const lucro24 = pegaLinha(56);
        const lucro25 = pegaLinha(63);
        const lucro26 = pegaLinha(70);
        const lucro27 = pegaLinha(77);
        const lucro28 = pegaLinha(84);
        const lucro29 = pegaLinha(91);
        const lucro30 = pegaLinha(98);
        const data1 = [
            { year: 2023, count: lucro23 },
            { year: 2024, count: lucro24 },
            { year: 2025, count: lucro25 },
            { year: 2026, count: lucro26 },
            { year: 2027, count: lucro27 },
            { year: 2028, count: lucro28 },
            { year: 2029, count: lucro29 },
            { year: 2030, count: lucro30 },
        ];
        const config = {
            type: 'bar',
            data: {
                labels: data1.map(row => row.year),
                datasets: [{
                    label: 'Lucros por ano R$',
                    data: data1.map(row => row.count)
                }]
            },
            options: {
                animation: {
                    duration: 2000
                }
            }
        }
        const myChart = new Chart(
            document.getElementById('acquisitions'),
            config
        );
        $('.build').addClass('desativar');
        $('.click').text('O gráfico abaixo mostra seus lucros até o ano de 2030, repare que seus lucros aumentam a cada ano.').css('color', 'green');

        function destroy(){
            myChart.destroy();
        };
        function render(){
            myChart = new Chart(
                document.getElementById('acquisitions'),
                config
            );
        };
    });

    const scrollUpBtn = $('.scroll-up-btn');
    const navbar = $('.navbar');
    const whats = $('.whats');
    $(window).scroll(() => {
        if(scrollY > 500) {
            scrollUpBtn.addClass('show');
            whats.addClass('sticky');
        }else{
            scrollUpBtn.removeClass('show');
            whats.removeClass('sticky');
        }
        if(scrollY > 20) {
            navbar.addClass('sticky');
        }else{
            navbar.removeClass('sticky'); 
        }
    });


    const insereDestaque = (y, z) => {
        const economia = $('.economiaAno');
        const porcento = $('.economiaPorc');
        economia.text(pegaLinha(y));
        const row = window.$('td').eq(z).text();
        porcento.text(row);
    }
    const pegaLinha = (n) => {
        const row = window.$('td').eq(n).text();
        return Number(row.replace('R$', ''));
    }
    const insereValorLinha = (l, v) => {
        if(v === 'R$ 0' || v === 'NaN %') {
            v = '';
            window.$('td').eq(l).text(v);
        } else{ window.$('td').eq(l).text(v)}; 
    }
    const calculoPorLinhaFatura = (y, z) => {
        const gastoMesResidencial = $('#txtBuscaResidencial').val();
        const linha45 = Math.round(gastoMesResidencial * y);
        const linha45Text = parseInt(linha45);
        const linha45TextInsere = ('R$ ' + linha45Text);
        const td = insereValorLinha(z, linha45TextInsere);
    }


    const calculoPorLinhaEnergia = (y, z, x, d) => {
        const gastoMesResidencial = $('#txtBuscaResidencial').val();
        const linha45 = Math.round(gastoMesResidencial * x * y);
        
        const valorMinimo = d.next().value;
        const valorMinimoNum = Number(valorMinimo);

        if(linha45 < valorMinimoNum) {
            const linha46 = valorMinimoNum;
            const linha45Text = parseInt(linha46);
            const linha45TextInsere = ('R$ ' + linha45Text);
            insereValorLinha(z, linha45TextInsere);
            return;
        }
        const linha45Text = parseInt(linha45);
        const linha45TextInsere = ('R$ ' + linha45Text);
        insereValorLinha(z, linha45TextInsere);
    }


    
    const calculaLinhaMensal = (w, y, z) => {
        const pEnergia = pegaLinha(w);
        const eMensal = pegaLinha(y);
        const calculo = (pEnergia - eMensal);
        const calculoText = parseInt(calculo);
        const calculoTextInsere = ('R$ ' + calculoText);
        insereValorLinha(z, calculoTextInsere);
    }
    const calculaLinhaMensalPor = (w, y, z) => {
        const eMensal = pegaLinha(w);
        const fatura = pegaLinha(y);
        const calculo = eMensal * 100 / fatura;
        const calculoText = parseInt(calculo);
        const calculoTextInsere = (calculoText + ' %');
        insereValorLinha(z, calculoTextInsere);
    }
    const calculaLinhaAnual = (y, z) => {
        const eMensal = pegaLinha(y);
        const calculo = eMensal * 12;
        const calculoText = parseInt(calculo);
        const calculoTextInsere = ('R$ ' + calculoText);
        insereValorLinha(z, calculoTextInsere);
    }
    const verificaRadioSelect = () => {
        const radio = $('input[name="theradio"]:checked').attr('id');
        if(!radio) {
            $('.divAlert').addClass('ativar');
            $('.alerta').text('Informe se seu consumo é RESIDENCIAL ou COMERCIAL.');
            $('.alert').addClass('ativar');
            $('#txtBuscaResidencial').blur();
            return;   
        }
        const select = $('.tipoRede').val();
        if(select === 'Informe seu tipo de rede') {
            $('.divAlert').addClass('ativar');
            $('.alerta').text('Informe seu tipo de rede.');
            $('.alert').addClass('ativar');
            $('#txtBuscaResidencial').blur();
            return;   
        }
        $('.divAlert').removeClass('ativar');
        $('.alert').removeClass('ativar');
    }
}


