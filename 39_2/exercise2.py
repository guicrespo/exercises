class Estatistica:
    @classmethod
    def media(cls, lista):
        return sum(lista) / len(lista)

    @classmethod
    def mediana(cls, lista):
        sorted_list = lista.sort()
        lista_length = len(sorted_list)
        if lista_length % 2 == 0:
            valor = (lista_length / 2) - 1
            return (sorted_list[valor] + sorted_list[valor + 1]) / 2
        valor = (lista_length + 1) / 2
        return sorted_list[valor - 1]

    @classmethod
    def moda(cls, lista):
        counter = dict()
        for num in lista:
            counter[num] = lista.count(num)
        
        moda = [numero for numero in max(counter.values()) if counter]
        