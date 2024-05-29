<script>
        function CalcularIdade {
            var anoNascimento = document.getElementById("anoNascimento").value;
        var anoatual = new Date ().getFullYear();
        VAR idade=anoatual - anoNascimento;
        document.getElementById("Resultado").innertext = "Sua idade é: " + idade +"anos.";
        }

    </script>
    